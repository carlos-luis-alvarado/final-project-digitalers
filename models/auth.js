
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
//node.bcypt.js-crypto node

const AuthSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        eamil:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }

    },
    {
        timestamps:true,
        versionKey:false
    }
)

AuthSchema.methods.passwordEncrypt =async (password) =>{
    const salt = await bcrypt.genSalt(10)//una semilla para encriptar
    return await bcrypt.hash(password,salt)
}

AuthSchema.methods.checkPassword = async function(password){
    return await bcrypt.compare(password,this.password)
}
module.exports = mongoose.model('Auth',AuthSchemaSchema)