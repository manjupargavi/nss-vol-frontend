import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
const Nav=()=>{
    const auth = localStorage.getItem("admin");
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return(
        <div>
       <div>
            <img src="https://kongu.edu/images/header.png" width="1500px" height="100px" className='log'/>
           </div>
           <div>
            <img src="https://static.vikaspedia.in/media/images_en/education/childrens-corner/nss-logotest.jpg" alt="log" className="logo nav-right"/>
            {
                auth ?
            <ul className='nav-ul nav-right'>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/">Activity</Link></li>
                <li><Link to="/add"> Add Activity</Link></li>
                <li><Link to="/update/:name">Update Activity</Link></li>
               
               <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
               </ul>:
               <ul className='nav-ul nav-right'>
                <li><Link to="/signup">Sign up</Link></li>
                <li><Link to="/login">Login</Link></li>
               </ul>
}
            </div>
        </div>
       
    );
}
export default Nav