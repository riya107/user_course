import {useState,useEffect} from 'react';

import Course from './Course';

import '../styles/AllCourses.css'

const  AllCourses= () => {

    const [courses,setCourses]=useState([]);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST}/course/getallcourses`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          })
            .then(function (response) {
              return response.json()
            })
            .then(function (data) {
                if(data.success==="true"){
                    setCourses([...courses,...data.data]);
                }
                else{
                    console.log("Some error occured");
                }
         })
        }
    ,[])
    return (
        <>
            <div className='courses'>
            {
                courses.map((course)=>{
                    return (
                        <Course key={course._id} course={course}/>
                    )
                })
            }
            </div>
        </>
    );
}
 
export default AllCourses;