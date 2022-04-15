const mongoose=require('mongoose')

const courseSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    start_date:{
        type:Date,
        required:true
    },
    end_date:{
        type:Date,
        required:true
    },
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }]
})

module.exports=mongoose.model('Course',courseSchema)