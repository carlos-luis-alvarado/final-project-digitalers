const express = require('express')
const router = express.Router()
const { getRootController } = require('../controllers')


//Rutas de index
router.get('/',getRootController)

module.exports=router