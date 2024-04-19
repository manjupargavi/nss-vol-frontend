import React, { useEffect } from 'react';
import {useParams,useNavigate} from 'react-router-dom'

const UpdateActivity = ()=>{
   
        const [name,setName] = React.useState('');
        const [time,setTime] = React.useState('');
        const [date,setDate] = React.useState('');
        const [description,setDescription] = React.useState('');
        const [location,setLocation] = React.useState('');
        const [slots,setSlots] = React.useState('');
        const [entry_fee,setFee] = React.useState('');
        const [contact,setContact] = React.useState('');
        const params = useParams();
        const navigate = useNavigate();

        useEffect(()=>{
            getActivityDetails();

        },[])
        const getActivityDetails=async()=>{
            console.warn(params)
            let result = await fetch(`https://nss-vol-backend.onrender.com/activity/${params.name}`);
            result = await result.json()
            console.warn(result)
            setName(result.name)
            setTime(result.time)
            setDate(result.date)
            setDescription(result.description)
            setLocation(result.location)
            setSlots(result.slots)
            setFee(result.entry_fee)
            setContact(result.contact)
        }
      

        const updateActivity = async()=>{
            console.warn(name,time,date,description,location,slots,entry_fee,contact)
            let result = await fetch(`https://nss-vol-backend.onrender.com/activity/${params.name}`,{
                method:'Put',
                body: JSON.stringify({name,time,date,description,location,slots,entry_fee,contact}),
                headers:{
                    'Content-Type':'Application/json'
                }
            });
result = await result.json()
if(result){
    navigate('/')
}
           
            

        }

    
    return(
        <div className="activity">
            
            <input type="text" placeholder="Enter activity name" className='inputbox' value={name} onChange={(e)=>{setName(e.target.value)}}/>
           
            <input type="text" placeholder="Enter activity time" className='inputbox' value={time} onChange={(e)=>{setTime(e.target.value)}}/>
           
            <input type="date" placeholder="Enter activity date" className='inputbox' value={date} onChange={(e)=>{setDate(e.target.value)}}/>
            
            <input type="text" placeholder="Enter activity description" className='inputbox' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            
            <input type="text" placeholder="Enter activity location" className='inputbox' value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
           
            <input type="text" placeholder="Enter activity slots" className='inputbox' value={slots} onChange={(e)=>{setSlots(e.target.value)}}/>
           
            <input type="text" placeholder="Enter activity entry fee" className='inputbox' value={entry_fee} onChange={(e)=>{setFee(e.target.value)}}/>
            
            <input type="text" placeholder="Enter activity contact" className='inputbox' value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
           
            <button className='appButton' onClick={updateActivity}>Update activity</button>

        </div>
    )
}
export default UpdateActivity