// const express = require('express')()
const express = require('express')
const { dbConnection } = require('./database/config')
const {engine} =  require('express-handlebars')
const session = require('express-session')
const flash = require('connect-flash')
const MongoStore = require('connect-mongo')
const passport = require('passport')
const methodOverride = require('method-override')
// const routerIndex = require('./routes')


const { routerDev } = require('./routes/db')
const { routerPosts } = require('./routes/posts')
const { routerProfiles } = require('./routes/profiles')
const { routerAuth } = require('./routes/auth')
require('dotenv').config()
require('./config/passport')
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
app.use(methodOverride('_method'))
app.use(
    session({
        secret:process.env.SESSION_SECRET,
        resave:true,
        saveUninitialized:true,
        store:MongoStore.create({mongoUrl:process.env.DB_REMOTA_URI})
    })
)
//TODO:revisar
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())


app.use((req,res, next)=>{
    res.locals.todo_ok = req.flash('todo_ok')
    res.locals.todo_error = req.flash('todo_error')
    next()
})
//routes
// app.use('/',routerIndex)

app.use('/',routerDev)//solo desarrollo
app.use('/',routerAuth)
app.use('/',routerPosts)
app.use('/',routerProfiles)

//test
//const { generatePosts } = require('./helpers/posts')
//generatePosts()

const PORT = process.env.PORT

app.listen(PORT,err=>{
    if(err) throw new Error(`Ocurrio un problema en el servidor ${err}`)
    else console.log(`Servidor express escuchando en el puerto ${PORT}`);
})