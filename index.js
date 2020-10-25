const express = require('express')
const server = express()
const port = 4000

server.use(express.json());

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({message: "Something went wrong"})
})

server.listen(port, () => {
    console.log(`Running on port ${port}`)
})