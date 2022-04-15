import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import AddCourse from './components/AddCourse';
import AddUser from './components/AddUser';
import AllCourses from './components/AllCourses';
import AllUsers from './components/AllUsers';
import Home from './components/Home';
import SideBar from './components/SideBar';
import './App.css';

function App() {

  const location=useLocation();

  return (
    <>
      <div className='App'>
        <SideBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/addcourse" element={<AddCourse/>}/>
          <Route path="/adduser" element={<AddUser/>}/>
          <Route path="/allcourses" element={<AllCourses/>}/>
          <Route path="/allusers" element={<AllUsers/>}/>
        </Routes>
        </div>
    </>
  );
}

export default App;
