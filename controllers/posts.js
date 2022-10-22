const { response } = require('express')
const Post = require('../models/posts')
//index
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({}).lean()
        console.log(posts);
        const title = 'InfoBlog - Listado de post'
        res.status(200).render('index',
            {
                title,
                posts
            }
        )
    } catch (error) {
        console.log(error);

    }
}
//show
const showPost = async (req, res = response) => {
    try {
        const post = await Post.findOne({ slug: req.params.slug }).lean()
        if (post === null) res.redirect('/')
        res.render('show',
            {
                title: `InfoBlog - ${post.title}`,
                post
            })
    } catch (error) {
        console.log('Error');
    }
}
//DELETE
const deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id)
        res.redirect('/posts')

    } catch (error) {
        console.log('Error delete', error);
    }
}

const newPost = (req, res) => {
    res.status(200).render('new')
}

const createPost = async (req, res) => {
    try {
        // console.log(req.body);
        let post = new Post()
        post.title = req.body.title
        post.body = req.body.body
        post = await post.save()
        res.redirect(`/posts/${post.slug}`)
    } catch (error) {
        console.log(error + 'CREAR');
    }
}

const showPostFormEdit =async (req,res=response)=>{
    try {
        const post = await Post.findById(req.params.id).lean()
        res.render('edit',{
            title:'Editando Post',
            post
        })
    } catch (error) {
        console.log('Show deit post ',error);
    }
}
module.exports = {
    getPosts,
    showPost,
    deletePost,
    newPost,
    createPost,
    showPostFormEdit
}