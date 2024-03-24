const express = require('express')
const { scrapeLogic } = require('./scrapeLogic')
const app = express()
const http = require('http')

const PORT = process.env.PORT || 4000

app.get('/scrape', (req, res) => {
    scrapeLogic(res)
})

app.get('/', (req, res) => {
    res.send('Render Puppeteer server is running')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

//keep app awake every 14 minutes
setInterval(() => {
    http.get('https://render-puppeteer-wpkn.onrender.com');
}, 14 * 60 * 1000); 