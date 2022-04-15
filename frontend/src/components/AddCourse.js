import {useState} from 'react';
import '../styles/AddCourse.css'

const  AddCourse= () => {

    const [course,setCourse]=useState({
            title:"",
            description:"",
            start_date:"",
            end_date:""
    });

    function onChange(e){
        setCourse({...course,[e.target.name]:e.target.value});
    }

    function addcourse(e){
        e.preventDefault();
        fetch(`${process.env.REACT_APP_HOST}/course/add`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(course)
          })
            .then(function (response) {
              return response.json()
            })
            .then(function (data) {
              if(data.success==="true"){
                alert("Course Added Successfully");
              }
              else{
                alert("Error Occured");
              }
              setCourse({
                title:"",
                description:"",
                start_date:"",
                end_date:""
        });
            });
    }
    return (
        <>
        <form className='courseform' action=""  onSubmit={addcourse}>
            <div>
                <label htmlFor="name">Title</label>
                <input className='inp' type="text" onChange={onChange} value={course.title} id="title" name='title' required/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input className='inp' type="text" onChange={onChange} value={course.description} id="description" name='description' required/>
            </div>
            <div>
                <label htmlFor="start_date">Start Date</label>
                <input className='inp' type="date" onChange={onChange} value={course.start_date} id="start_date" name='start_date' required/>
            </div>
            <div>
                <label htmlFor="end_date">Start Date</label>
                <input className='inp' type="date" onChange={onChange} value={course.end_date} id="end_date" name='end_date' required/>
            </div>
            <input className='inp' type="submit" value='Add Course'/>
        </form>
        </>
    );
}
 
export default AddCourse;