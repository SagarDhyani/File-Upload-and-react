const mongoose = require("mongoose")

const imageSchema = new mongoose.Schema({

    title: {type: String},
    description:{type: String},
    image_urls : {type: String, required: true}
})

module.exports = mongoose.model("image", imageSchema)