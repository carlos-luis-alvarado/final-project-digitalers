const {response} = require('express')
const Post = require('../models/posts')
//index
const getPosts = async(req,res)=>{
    try {
        const posts =  await Post.find({}).lean()
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
const showPost = async(req,res=response)=>{
    try {
        const post = await Post.findOne({slug:req.params.slug}).lean()
        if(post===null) res.redirect('/')
        res.render('show',
        {
            title:`InfoBlog - ${post.title}`,
            post
        })
    } catch (error) {
        console.log('Error');
    }
}
module.exports = {
    getPosts,
    showPost
}