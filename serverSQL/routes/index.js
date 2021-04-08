module.exports = app => {

    // Base URLS
    app.use('/api/news', require('./news.routes'))
}