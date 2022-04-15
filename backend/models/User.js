const mongoose=require('mongoose')
const validator=require('validator')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate(value){
            return validator.isEmail(value)
        }
    },
    contact:{
        type:Number,
        required:true
    },
    courses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course',
        required:true
    }]
})

module.exports=mongoose.model('User',userSchema)