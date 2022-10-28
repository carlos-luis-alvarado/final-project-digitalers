
const express = require('express')
const { getPosts,showPost, deletePost, newPost, createPost ,showPostFormEdit,traerPostCards} = require('../controllers/posts')
const routerPosts =  express.Router()


//rutas de index
routerPosts.get('/',traerPostCards)
routerPosts.get('/posts',getPosts)
routerPosts.get('/posts/new',newPost)
routerPosts.get('/posts/edit/:id',showPostFormEdit)
routerPosts.get('/posts/:slug',showPost)
routerPosts.post('/posts',createPost)
routerPosts.delete('/post/:id',deletePost)

module.exports = {
    routerPosts
}