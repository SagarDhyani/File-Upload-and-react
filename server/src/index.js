const express = require("express")

const imageController = require("./controllers/image.controller")

const app = express()

app.use(express.json())

app.use("/src/public", express.static(__dirname + '/public'))

app.use("/image", imageController)


module.exports = app