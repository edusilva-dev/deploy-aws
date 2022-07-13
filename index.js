const express = require('express')
const app = express()

app.get('/', (req, res) => {
  return res.json({ server: 'Is up!' })
})

app.get('/send/mail', (req, res) => {
  return res.status(200).json({ email: 'sent' })
})

app.listen(3000)
