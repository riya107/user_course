require("dotenv").config();

require('./db')

const  User= require("./models/User");
const  Course= require("./models/Course");

const routes_user=require('./routes/user.js')
const routes_course=require('./routes/course.js')

const cors=require('cors')

const express=require('express')

const app=express()

app.use(cors())

app.use(express.json())

app.use('/user',routes_user)
app.use('/course',routes_course)

app.put("/enroll/:userid/:courseid", async (req, res) => {
    try {
        const userid = req.params.userid;
        const courseid = req.params.courseid;

        const user = await User.findById({_id:userid})
        const course = await Course.findById({_id:courseid})

        const start_date=course.start_date;

        if(new Date()>=start_date){
            res.json({success:"false",error:"You can only enroll in the course before start date."})
            return;   
        }

        if(user.courses.indexOf(courseid)!=-1){
            res.json({success:"false",error:"You have already enrolled in that course."})
            return;
        }

        user.courses.push(courseid);
        course.users.push(userid);

        const updateduser = await User.findByIdAndUpdate(
            { _id: userid },
            { $set: user },
            { new: true, runValidators: true }
        );
        const updatedcourse = await Course.findByIdAndUpdate(
            { _id: courseid },
            { $set: course },
            { new: true, runValidators: true }
        );

        res.json({success:"true",data:{"user":updateduser,"course":updatedcourse}});
        
    } catch (error) {
        res.status(400).send({ success:"false",error: "Some error occured" });
    }
});

app.listen(process.env.PORT || 80,()=>{
    console.log(`connected to port ${process.env.PORT || 80}`)
})