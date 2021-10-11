const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors())


const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
    projectId: 'nodal-descent-326009',
    keyFilename: './../nodal-descent-326009-0a2c9577ef33.json',
});
app.listen(3000);

const deleteCollection = (req, res) => {
    db.collection("memes").listDocuments().then(val => {
        val.map((val) => {
            val.delete()
        })
    })
    res.send("finish")
}

app.delete('/delete', deleteCollection)
