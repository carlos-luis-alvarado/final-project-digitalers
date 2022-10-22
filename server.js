// const express = require('express')()
const express = require('express')
const { dbConnection } = require('./database/config')
const {engine} =  require('express-handlebars')
const routerIndex = require('./routes')
const { routerDev } = require('./routes/db')
const { routerPosts } = require('./routes/posts')
require('dotenv').config()
//inicializo la aplicacion de express
const app = express()
//conectarme a la db
dbConnection()
//Template engine
app.engine('hbs',engine({extname:'.hbs'}))
app.set('view engine','hbs')
app.set('views','./views')
//Middlewares
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//routes
app.use('/',routerIndex)

app.use('/',routerDev)//solo desarrollo
app.use('/',routerPosts)


//test
//const { generatePosts } = require('./helpers/posts')
//generatePosts()

const PORT = process.env.PORT

app.listen(PORT,err=>{
    if(err) throw new Error(`Ocurrio un problema en el servidor ${err}`)
    else console.log(`Servidor express escuchando en el puerto ${PORT}`);
})