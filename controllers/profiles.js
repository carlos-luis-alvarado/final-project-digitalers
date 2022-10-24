const {response} = require('express')

const Profile = require("../models/profiles")


const getProfiles = async(req,res=response)=>{
    try {
        const profiles = await Profile.find({}).lean()
        const title = 'InfoBlog - Listado de post'
        res.status(200).render('profile',
            {
                title,
                profiles
            }
        )
        // res.status(200).render('profile')
    } catch (error) {
        console.log(error);
    }
    
    
}




module.exports = {
    getProfiles
}