import CourseItem from './CourseItem';
import { useState } from 'react';
import '../styles/Course.css';

const Course = (props) => {
    const [val,toggle]=useState(false);
    function handle(){
        if(val==false){
            toggle(true);
        }
        else{
            toggle(false);
        }
    }
    return ( 
        <>
            <div className="btn" onClick={handle}>{props.course.title}</div>
            {val && <CourseItem course={props.course} handle={handle}/>}
        </>
    );
}
 
export default Course;