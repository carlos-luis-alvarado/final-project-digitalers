
const express = require('express')
const { getPosts,showPost, deletePost, newPost, createPost ,showPostFormEdit,traerPostCards} = require('../controllers/posts')
const isAuthenticated = require('../middlewares/isauthenticated')
const routerPosts =  express.Router()


//rutas de index
routerPosts.get('/',traerPostCards)
routerPosts.get('/posts',isAuthenticated,getPosts)
routerPosts.get('/posts/new',isAuthenticated,newPost)
routerPosts.get('/posts/edit/:id',isAuthenticated,showPostFormEdit)
routerPosts.get('/posts/:slug',isAuthenticated,showPost)
routerPosts.post('/posts',isAuthenticated,createPost)
routerPosts.delete('/post/:id',isAuthenticated,deletePost)

module.exports = {
    routerPosts
}