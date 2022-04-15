const express = require("express");

const router = express.Router();

const  Course= require("../models/Course");
const  User= require("../models/User");

router.post("/add",async (req, res) => {
    try {
        const course = new Course({
            title: req.body.title,
            description: req.body.description,
            start_date: req.body.start_date,
            end_date: req.body.end_date
        });
        const createCourse = await course.save();
        res.send({success:"true",data:createCourse});
    } catch (error) {
        res.status(400).json({success:"false",error:error});
    }
});

router.get("/getallcourses", async (req, res) => {
    try {
        const courses = await Course.find({});
        res.send({success:"true",data:courses});
    } catch (error) {
        res.status(500).send({ success:"false",error: "Internal server error" });
    }
});

router.get("/getusers/:courseid", async (req, res) => {
    try {
        const course = await Course.findById({_id:req.params.courseid})
        const userids=course.users;

        const users=[];

        for(const id of userids){
           const user=await User.findById({_id:id})
           users.push(user);
        }

        res.json({success:"true",data:users});

    } catch (error) {
        res.status(400).send({success:"false",error: "Some error occured" });
    }
});

module.exports = router;