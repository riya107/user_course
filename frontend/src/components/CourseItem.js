import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const CourseItem = (props) => {

    function onClick(){
        props.handle();
    }

    const [val,toggle]=useState(false);

    function openform(){
        const id=prompt("Enter User Id.")

        fetch(`${process.env.REACT_APP_HOST}/enroll/${id}/${props.course._id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            }
          })
            .then(function (response) {
              return response.json()
            })
            .then(function (data) {
              if(data.success==="true"){
                alert("User Added Successfully");
              }
              else{
                alert("Error Occured");
              }
            });
    }

    function handle(){
        if(val==false){
            toggle(true);
        }
        else{
            toggle(false);
        }
    }

    const [users,setUsers]=useState([]);

    const fetchusers=()=>{
        fetch(`${process.env.REACT_APP_HOST}/course/getusers/${props.course._id}`, {
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
                    setUsers([...data.data]);
                    toggle(true);
                }
                else{
                    console.log("Some error occured");
                }
         })
        }

    return ( 
        <>
        <div className='courseitem'>
            <span className='icon' onClick={onClick}><CloseIcon/></span>
            <div className="label">ID</div>
            <div>{props.course._id}</div>
            <div className="label">Title</div>
            <div>{props.course.title}</div>
            <div className="label">Description</div>
            <div>{props.course.description}</div>
            <div className="label">Start Date</div>
            <div>{props.course.start_date}</div>
            <div className="label">End Date</div>
            <div>{props.course.end_date}</div>
            <button className='btn' onClick={fetchusers}>Enrolled Users</button>
            <button className='btn' onClick={openform}>Enroll Now</button>
        </div>
        {val && users.length!=0 && (<div className='items'>
        <span className='icon' onClick={handle}><CloseIcon/></span>
            {
                users.map((user)=>{
                    return (
                        <div className='btn' key={user._id}>{user.name}</div>
                    )
                })
            }
        </div>)}

        {val && users.length==0 && alert("No user enrolled")}
        </>
     );
}
 
export default CourseItem;