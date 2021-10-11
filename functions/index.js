const cors = require('cors')({ origin: true });
const request = require('request')
const fs = require('fs')
const dotenv = require('dotenv').config()

const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

const requestApiMemes = () => {
    return new Promise((resolve, reject) => {
        let options = {
            method: 'GET',
            json: true,
            url: 'https://api.imgflip.com/get_memes'
        }
        request(options, (error, response, body) => {
            if (error)
                reject(error)
            else
                resolve(body)
        })
    })
}
const requestFromGoogle = (secret_key, response_key) => {
    return new Promise((resolve, reject) => {
        let options = {
            method: 'POST',
            json: true,
            url: `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key}`
        }
        request(options, (error, response, body) => {
            if (error) {
                console.log(error);
                reject(error)
            }
            else {
                console.log(body);
                resolve(body)
            }
        })
    })
}
exports.votingProcess = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        let ipAdress = req.ip
        let { memeId } = req.query
        console.log(memeId);
        let currentIp = await db.collection("ipAdresses").doc(ipAdress).get()
        if (!currentIp.exists)
            await db.collection("ipAdresses").doc(ipAdress).set({ isUsed: false })
        if (!currentIp.data().isUsed) {
            let meme = await db.collection('memes').doc(memeId).get();
            let prevVotesNumber = meme.data().votesNumber
            await db.collection("memes").doc(memeId).update({
                votesNumber: prevVotesNumber + 1
            })
            await db.collection("ipAdresses").doc(ipAdress).update({ isUsed: true })
            res.json({ "status": 200, "success": true })
        }
        else {
            res.json({ "success": false, "error": "can't get twice voting from the same ip" })
        }
    })
})
exports.votingHistory = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        let { userId } = req.query
        let user = await db.collection("users").doc(userId).get();
        if (user.data().permission || user.data().isAdmin) {
            let votingHistory = await db.collection("memes").get()
            let votingHistoryObject = []
            votingHistory.docs.map(doc => {
                let x = doc.data()
                x.votingDate = doc.data().votingDate.toDate().toDateString()
                votingHistoryObject.push(x)
            })

            votingHistoryJson = JSON.stringify(votingHistoryObject)
            fs.writeFile('voting history json.json', votingHistoryJson, 'utf8', (err, data) => {
                if (err)
                    console.log();
                else
                    console.log();
            });
            res.json({ "votingHistory": votingHistoryObject })
        }
        else
            res.json({ "success": false, "error": "you don't have permission" })
    })
})
exports.initalizeMemes = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        let memes = await requestApiMemes()
        let dailyMemes = []
        let i = 0
        for (let index = 0; index < memes.data.memes.length; index++) {
            meme = memes.data.memes[index]
            if (i >= 2)
                break
            let doc = await db.collection('memes').doc(meme.id).get()
            if (!doc.exists) {
                i += 1
                await db.collection("memes").doc(meme.id).set({ votesNumber: 0, votingDate: new Date(), memeUrl: meme.url })
                dailyMemes.push(meme)
            }
        }
        db.collection("ipAdresses").listDocuments().then(val => {
            val.map((val) => {
                val.update({ isUsed: false })
            })
        })
        res.json({ "success": true, "memes": dailyMemes })
    })
})
exports.getUsers = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        let users = await db.collection('users').get()
        let userArry = []
        users.docs.map(doc => {
            if (!doc.data().isAdmin)
                userArry.push({ data: doc.data(), id: doc.id })
        })
        res.json({ "success": true, "users": userArry })
    })
})
exports.IsUsersWithPermission = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        let { userId } = req.query
        let user = await db.collection("users").doc(userId).get();
        if (user.data().permission) {
            res.json({ "result": true })
        }
        else {
            res.json({ "result": false })
        }
    })
})
exports.submitCaptcha = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        const response_key = req.body.res;
        const secret_key = process.env.SERVER;
        console.log(secret_key);
        try {
            let google_response = await requestFromGoogle(secret_key, response_key)
            if (google_response.success == true) {
                return res.json({ response: "Successful" });
            } else {
                return res.json({ response: "Failed" });
            }
        } catch (error) {
            res.json({ err: error })
        }
    })
})
exports.givePermission = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        let { userId } = req.query
        await db.collection('users').doc(userId).update({ permission: true })
        res.json({ "success": true, "messages": "successfully added permission" })
    })
})
exports.signUp = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        let { userId, userName, password } = req.body
        try {
            await db.collection('users').doc(userId).set({ userName: userName, password: password })
            res.json({ "success": true })
        }
        catch (err) { res.json({ "err": err }) }
    })
})

