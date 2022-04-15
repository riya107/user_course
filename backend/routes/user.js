const express = require("express");

const router = express.Router();

const  User= require("../models/User");
const  Course= require("../models/Course");

router.post("/add",async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact
        });
        const createUser = await user.save();
        res.send({success:"true",data:createUser});
    } catch (error) {
        res.status(400).json({success:"false",error:error});
    }
});

router.get("/getallusers", async (req, res) => {
    try {
        const users = await User.find({});
        res.send({success:"true",data:users});
    } catch (error) {
        res.status(500).send({success:false,error: "Internal server error" });
    }
});

router.get("/getcourses/:userid", async (req, res) => {
    try {
        const user = await User.findById({_id:req.params.userid})
        const courseids=user.courses;

        const courses=[];

        for(const id of courseids){
           const course=await Course.findById({_id:id})
           courses.push(course);
        }

        res.json({success:"true",data:courses});

    } catch (error) {
        res.status(400).send({success:"false",error: "Some error occured" });
    }
});
module.exports = router;
