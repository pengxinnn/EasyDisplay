/* server.js - Express server*/
'use strict';
const log = console.log

const express = require('express')

const app = express();

app.use(express.static(__dirname + '/pub'))

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/pub/landingPage.html");
})

app.get('/example', (req, res) => {
	res.sendFile(__dirname + "/pub/example.html");
})

app.get('/api', (req, res) => {
	res.sendFile(__dirname + "/pub/api.html");
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
})

