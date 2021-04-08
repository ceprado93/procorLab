const express = require('express')
const router = express.Router()
const News = require('../models/news.model')

router.get('/', (req, res) => {
    News.find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching News', err }))
})

router.get('/details/:news_id', (req, res) => {
    News.findById(req.params.news_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching News', err }))
})

router.post('/new', (req, res) => {
    console.log(req.body)
    const { title, image, intro, description, tags } = req.body
    console.log(req.body)

    News.create({ title, image, intro, description, tags })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving News', err }))
})

router.put('/edit/:news_id', (req, res) => {
    console.log(req.params.news_id)
    News.findByIdAndUpdate(req.params.news_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing News', err }))
})

router.delete('/delete/:news_id', (req, res) => {
    News.findByIdAndRemove(req.params.news_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving News', err }))
})

module.exports = router