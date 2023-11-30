const express = require('express')
const tennisRouter = require('./tennis.router')
require('dotenv').config();


function routerApi(app){
    const router = express.Router()

    app.use('/api/v1', router)

    router.use('/tennis', tennisRouter)
}

module.exports = routerApi