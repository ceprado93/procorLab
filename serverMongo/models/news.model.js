const mongoose = require("mongoose")

const Schema = mongoose.Schema

const newsSchema = new Schema({

    image: String,
    title: String,
    intro: String,
    description: String,
    tags: [String]
},
    {
        timestamps: true
    })

const News = mongoose.model("News", newsSchema)
module.exports = News
