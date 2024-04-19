import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Login=()=>{
    const [email,setEmail] = React.useState('');
    const [pass,setPass] = React.useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem("admin");
        if(auth){
            navigate("/")
        }
    },[])
    const handleLogin=async ()=>{
        let result = await fetch("https://nss-vol-backend.onrender.com/login",{
            method:'post',
            body :JSON.stringify({email,pass}),
            headers:{
                'Content-Type':'application/json'
            }

        });
        result = await result.json();
        console.log(result)
        if(result.name){
            localStorage.setItem('admin',JSON.stringify(result));
            navigate('/')
        }
        else{
            toast("Please enter correct details")
        }
       
    }
    return(
        <div className="login">
            <h1>Login</h1>
            <input type="text" className="inputbox" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input type="password" className="inputbox" placeholder="Enter password" onChange={(e)=>setPass(e.target.value)} value={pass}/>
            <button onClick={handleLogin} type="button" className='appButton'>Login</button>
            <ToastContainer/>
        </div>
    )
}
export default Login