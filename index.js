const express = require('express')
const app = express()

app.get('/', (req, res) => {
  return res.json({ server: 'Is up!' })
})

app.listen(3000)
