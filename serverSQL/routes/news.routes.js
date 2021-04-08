const express = require('express')
const router = express.Router()
const db = require('../models/news.model')

router.get('/', (req, res) => {
    db.News.find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching News', err }))
})

router.get('/details/:news_id', (req, res) => {
    db.News.findById(req.params.news_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching News', err }))
})

router.post('/new', (req, res) => {
    const { Description, Title, Image } = req.body

    db.News.create({ Description, Title, Image })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving News', err }))
})

router.put('/edit/:news_id', (req, res) => {
    db.News.findByIdAndUpdate(req.params.news_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing News', err }))
})

router.delete('/delete/:news_id', (req, res) => {
    db.News.findByIdAndRemove(req.params.news_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving News', err }))
})

module.exports = router