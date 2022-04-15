import UserItem from './UserItem';
import { useState } from 'react';
import '../styles/User.css';

const User = (props) => {
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
            <div className="btn" onClick={handle}>{props.user.name}</div>
            {val && <UserItem user={props.user} handle={handle}/>}
        </>
    );
}
 
export default User;