
const express = require('express')
const { getPosts } = require('../controllers/posts')
const routerPosts =  express.Router()


//rutas de index
routerPosts.get('/posts',getPosts)

module.exports = {
    routerPosts
}