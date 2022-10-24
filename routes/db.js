const express = require('express')
const { generatePosts } = require('../helpers/posts')
const { generateProfile } = require('../helpers/profiles')
const routerDev = express.Router()
const Post = require('../models/posts')
const Profile =  require('../models/profiles')
// TODO: Llevar esto a un controlador
routerDev.get('/db/fresh', async (req, res = express.response) => {
    try {

        const posts =  await Post.deleteMany()
        console.log(posts);
        for (let i = 0; i < 20; i++) {

             const nuevoPost = generatePosts()
             const post = new Post(nuevoPost)
             await post.save()
        }

        res.send('Todo ok')
    } catch (error) {
        console.log(error);
        res.send('Error')
    }
})

routerDev.get('/db/fresh-profiles', async (req, res = express.response) => {
    try {

        const profiles =  await Profile.deleteMany()
        // console.log(posts);
        for (let i = 0; i < 20; i++) {
             const nuevoProfile = generateProfile()
             const profile = new Profile(nuevoProfile)
             await profile.save()
        }

        res.send('Todo ok los perfiles')
    } catch (error) {
        console.log(error);
        res.send('Error')
    }
})

module.exports = {
    routerDev
}