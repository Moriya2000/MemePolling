const express = require('express')
const app = express();
const fs = require('fs')
const request = require('request')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
app.use(bodyParser.json())


app.get('/', function (req, res) {
    res.send("My First Project In NodeJS");
});

const Firestore = require('@google-cloud/firestore');
const { get } = require('request');

const db = new Firestore({
    projectId: 'nodal-descent-326009',
    keyFilename: './../nodal-descent-326009-0a2c9577ef33.json',
});
app.listen(3000);



// const firebase = require('firebase');
// const firebaseui = require('firebaseui');
// // Initialize the FirebaseUI Widget using Firebase.
// const ui = new firebaseui.auth.AuthUI(firebase.auth());
// const login = async (req, res) => {
//     // let { userName, password } = req.params
//     // let snapshot = await db.collection('users').get();
//     // let user = snapshot.docs.filter(doc => userName == doc.data().userName && password == doc.data().password)

//     ui.start('#firebaseui-auth-container', {
//         signInOptions: [
//             firebase.auth.EmailAuthProvider.PROVIDER_ID,
//             firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//             firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//             firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//             firebase.auth.GithubAuthProvider.PROVIDER_ID
//         ],
//     })
//     // , users: user
//     res.json({ message: "success to login" })
// }


const voting = async (req, res) => {
    let { memeId } = req.params
    let meme = await db.collection('memes').doc(memeId).get();
    let prevVotesNumber = meme.data().votesNumber

    await db.collection("memes").doc(memeId).update({
        votesNumber: prevVotesNumber + 1
    })

    let ipAdress = req.ip
    console.log(ipAdress);
    let currentIp = await db.collection("ipAdresses").doc(ipAdress).get()

    if (!currentIp.exists)
        await db.collection("ipAdresses").doc(ipAdress).set({ isUsed: true })
    else
        await db.collection("ipAdresses").doc(ipAdress).update({ isUsed: true })
    res.send("success")
}

const votingHistory = async (req, res) => {
    let votingHistory = await db.collection("memes").get()
    let votingHistoryObject = []
    votingHistory.docs.map(doc => votingHistoryObject.push(doc.data()))
    votingHistoryJson = JSON.stringify(votingHistoryObject)
    fs.writeFile('voting history json.json', votingHistoryJson, 'utf8', (err, data) => {
        if (err)
            console.log();
        else
            console.log();
    });
    res.json({ "votingHistory": votingHistoryJson })
}

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

const initalizeMemes = async (req, res) => {
    let memes = await requestApiMemes()
    let memes_url = []
    let i = 0
    for (let index = 0; index < memes.data.memes.length; index++) {
        meme = memes.data.memes[index]
        if (i >= 2)
            break
        let doc = await db.collection('memes').doc(meme.id).get()
        if (!doc.exists) {
            i += 1
            await db.collection("memes").doc(meme.id).set({ votesNumber: 0, votingDate: new Date(), memeUrl: meme.url })
            memes_url.push(meme.url)
        }
    }
    res.json({ "success": true, url: memes_url })
}

const getUsers = async (req, res) => {
    let users = await db.collection('users').get()
    let userArry = []
    users.docs.map(doc => {
        if (!doc.data().isAdmin)
            userArry.push({ data: doc.data(), id: doc.id })
    })
    res.json({ "seccess": true, "user": userArry })
}

const givePermission = async (req, res) => {
    let { userId } = req.params
    await db.collection('users').doc(userId).update({ permission: true })
    res.send("success")
}


// const recaptcha_async = require('recaptcha-async')

// const recaptcha = new recaptcha_async.reCaptcha();

// const createCaptch = (req, res) => {
//     recaptcha.on('data', function (res) {
//     console.log(res.is_valid)                   

//         if (res.is_valid)
//             html = "valid answer";
//         else{
//             html = recaptcha.getCaptchaHtml(process.env.CLIENT, res.error);
//             console.log(html);
//         }
//     });
//     recaptcha.checkAnswer(process.env.SERVER, 
//                           req.connection.remoteAddress, 
//                           req.body.recaptcha_challenge_field, 
//                           req.body.recaptcha_response_field);
// }
const submit = (req, res) => {
    // getting site key from client side
    const response_key = req.body["g-recaptcha-response"];
    // Put secret key here, which we get from google console
    const secret_key = process.env.SERVER;

    // Hitting POST request to the URL, Google will
    // respond with success or error scenario.
    const url =
        `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key}`;

    // Making POST request to verify captcha
    fetch(url, {
        method: "post",
    })
        .then((response) => response.json())
        .then((google_response) => {

            // google_response is the object return by
            // google as a response
            if (google_response.success == true) {
                //   if captcha is verified
                return res.send({ response: "Successful" });
            } else {
                // if captcha is not verified
                return res.send({ response: "Failed" });
            }
        })
        .catch((error) => {
            // Some error while verify captcha
            return res.json({ error });
        });
        
}

// app.use("/login/:userName/:password", login)
app.use("/voting/:memeId", voting)
app.use("/votingHistory/:userName/:password", votingHistory)
app.use("/initalizeMemes", initalizeMemes)
app.use("/getUsers", getUsers)
app.use("/givePermission/:userId", givePermission)
app.post('/createCaptcha', submit)
