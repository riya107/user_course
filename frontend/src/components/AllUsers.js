import {useState,useEffect} from 'react';
import User from './User';

import '../styles/AllUsers.css'

const  AllUsers= () => {

    const [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST}/user/getallusers`, {
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
                    setUsers([...users,...data.data])
                }
                else{
                    console.log("Some error occured")
                }
         })
        }
    ,[])
    return (
        <>
        <div className='users'>
            {
                users.map((user)=>{
                    return (
                        <User key={user._id} user={user}/>
                    )
                })
            }
        </div>
        </>
    );
}
 
export default AllUsers;