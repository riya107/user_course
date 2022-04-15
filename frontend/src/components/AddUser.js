import {useState} from 'react';
import '../styles/AddUser.css'

const  AddUser= () => {

    const [user,setUser]=useState({
            name:"",
            email:"",
            contact:""
    });

    function onChange(e){
        setUser({...user,[e.target.name]:e.target.value});
    }

    function adduser(e){
        e.preventDefault();
        fetch(`${process.env.REACT_APP_HOST}/user/add`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
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
              setUser({
                name:"",
                email:"",
                contact:""
        });
            });

    }
    return (
        <>
        <form className='userform' action=""  onSubmit={adduser}>
            <div>
                <label htmlFor="name">Name</label>
                <input className='inp' type="text" onChange={onChange} value={user.name} id="name" name='name' required/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input className='inp' type="email" onChange={onChange} value={user.email} id="email" name='email' required/>
            </div>
            <div>
                <label htmlFor="contact">Contact</label>
                <input className='inp' type="number" onChange={onChange} value={user.contact} id="contact" name='contact' required/>
            </div>
            <input className='inp' type="submit" value='Add User'/>
        </form>
        </>
    );
}
 
export default AddUser;