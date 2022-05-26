require('dotenv').config();
const express = require('express');
const app = express()

app.use('/places', require('./controlles/places'))

app.get('/', (req, res) => {
        res.send('Hello World!')
})

app.get('*', (req, res) => {
        res.status(404).send('<h1>404 Not Found</h1>')
})

app.listen(process.env.PORT)