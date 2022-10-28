
const mongoose = require('mongoose')
// const { default: slugify } = require('slugify')


const profileSchema =  new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        job:{
            type:String,
            required:true
        },
        img:{
            type:String, 
            // contentType: String
        }
    },
    {
        versionKey:false
    }
)

// Middleware .pre()
//TODO: llevar este middleware a un archivo separado
// profileSchema.pre('validate',function(next){
//     if(this.title){
//         this.slug=slugify(this.title,{lower:true,strict:true})
//     }
//     next()
// })
module.exports = mongoose.model('Profile',profileSchema)