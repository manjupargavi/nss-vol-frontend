import React,{useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
const Signup=()=>{
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[pass,setPass] = useState("");
    const[cpass,setCpass] = useState("");
    const navigate = useNavigate();
    const [error,setError] = React.useState(false);

        
    useEffect(()=>{
        const auth = localStorage.getItem("admin");
        if(auth){
        navigate('/')
        }
    },[])
    const collectData = async () => {
      if(!name || !email || !pass || !cpass ){
        setError(true);
        return false
    }
        console.log(name, email, pass, cpass);
      
        try {
          const response = await fetch("https://nss-vol-backend.onrender.com/register", {
            method: 'POST',
            body: JSON.stringify({ name, email, pass, cpass }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          if (response.ok) {
            const result = await response.json();
            console.log(result);
            localStorage.setItem("admin", JSON.stringify(result));
            navigate('/');
          } else {
            console.log('Error: Failed to register');
          }
        } catch (error) {
          console.log('Error:', error);
        }
      }
    return(
        <div className="register">
          <br/><br/>
            <h1>Register</h1>
            <input className="inputbox" type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            {error && !name && <span className='invalid-input'>Enter valid name</span>}
            <input className="inputbox" type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            {error && !email && <span className='invalid-input'>Enter valid email</span>}
            <input  className="inputbox" type="password" placeholder="Enter Password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
            {error && !pass && <span className='invalid-input'>Enter valid password</span>}
            <input  className="inputbox" type="password" placeholder="Enter Confirm Password" value={cpass} onChange={(e)=>setCpass(e.target.value)}/>
            {error && !cpass && <span className='invalid-input'>Enter valid confirm password</span>}
            <button onClick={collectData} className="appButton" type="button">Sign up</button>
        </div>
    )
}
export default Signup