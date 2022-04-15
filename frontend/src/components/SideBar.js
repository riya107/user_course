import {Link} from 'react-router-dom';
import '../styles/SideBar.css';

const  SideBar= () => {
    return (
        <>
            <div className='sidebar'>
                <div ><Link className='barchild' to="/">Home</Link></div>
                <div ><Link className='barchild' to="/adduser">Add User</Link></div>
                <div ><Link className='barchild' to="/addcourse">Add Course</Link></div>
                <div ><Link className='barchild' to="/allusers">Users</Link></div>
                <div ><Link className='barchild' to="/allcourses">Courses</Link></div>
            </div>
        </>
    );
}
 
export default SideBar;