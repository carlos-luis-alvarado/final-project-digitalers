const express = require('express')
const { getProfiles } = require('../controllers/profiles')
const routerProfiles = express.Router()

routerProfiles.get('/profiles',getProfiles)



module.exports={
    routerProfiles
}
