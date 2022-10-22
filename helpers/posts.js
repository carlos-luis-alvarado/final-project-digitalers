const express = require('express')
const slugigy =  require('slugify')
const {faker} =  require('@faker-js/faker')

const generatePosts = ()=>{
    const post = {
        title:faker.lorem.words(6),
        body:faker.lorem.sentence(12),
        //slug:slugigy(faker.lorem.words(6).toLowerCase()),
    }
    //test
    //console.log(post)
    return post
}

module.exports={
    generatePosts
}
