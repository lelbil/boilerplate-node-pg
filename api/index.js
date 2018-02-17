const express = require('express')

const db = require('./db')

const PORT = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
	return res.end('Hello from the container side')
})

app.listen(PORT, async () => {
    console.log(`App running on port ${PORT}..`)
})
