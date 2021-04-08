const mongoose = require("mongoose")

const Schema = mongoose.Schema

const newsSchema = new Schema({

    description: String,
    image: String,
    title: String,
    tags: [String]
},
    {
        timestamps: true
    })

const News = mongoose.model("News", newsSchema)
module.exports = News