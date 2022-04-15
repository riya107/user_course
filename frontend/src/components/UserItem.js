import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const UserItem = (props) => {

    function onClick(){
        props.handle();
    }

    const [val,toggle]=useState(false);

    function handle(){
        if(val==false){
            toggle(true);
        }
        else{
            toggle(false);
        }
    }

    const [courses,setCourses]=useState([]);

    const fetchcourses=()=>{
        fetch(`${process.env.REACT_APP_HOST}/user/getcourses/${props.user._id}`, {
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
                    setCourses([...data.data]);
                    toggle(true);
                }
                else{
                    console.log("Some error occured");
                }
         })
        }
    
    return ( 
        <>
        <div className='useritem'>
            <span className='icon' onClick={onClick}><CloseIcon/></span>
            <div className="label">ID</div>
            <div>{props.user._id}</div>
            <div className="label">Name </div>
            <div>{props.user.name}</div>
            <div className="label">Email </div>
            <div>{props.user.email}</div>
            <div className="label">Contact </div>
            <div>{props.user.contact}</div>
            <button className='btn' onClick={fetchcourses}>Enrolled Courses</button>
        </div>
        {val && courses.length!=0 && (<div className='items'>
        <span className='icon' onClick={handle}><CloseIcon/></span>
            {
                courses.map((course)=>{
                    return (
                        <div className='btn' key={course._id}>{course.title}</div>
                    )
                })
            }
        </div>)}

        {val && courses.length==0 && alert("No course enrolled")}
        </>
     );
}
 
export default UserItem;