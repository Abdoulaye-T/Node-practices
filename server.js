const express = require('express')

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.status(200).json({  message: 'API is running.'   })
})

app.get('/hi', (req, res) => {
    res.status(200).json({  message: 'Hello everyone, I am happy to be here.'   })
})

const port = process.env.PORT || 5500
app.listen(port, () => console.log(`Listening on Port: localhost:${port}`))
