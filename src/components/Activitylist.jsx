import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Activitylist = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        getActivities();
    }, []); 
    const getActivities = async () => {
        let result = await fetch('https://nss-vol-backend.onrender.com/activities');
        result = await result.json();
        setActivities(result);
}
console.warn(activities)
const deleteActivity=async(name)=>{
    console.warn(name)
    let result = await fetch(`https://nss-vol-backend.onrender.com/activity/${name}`,{
        method : "DELETE"
    });
    result = await result.json();
    if(result){
        toast("Product deleted")
        getActivities()
        
    }
};

const searchHandle = async(event)=>{
    let key = event.target.value;
    let result =await fetch(`https://nss-vol-backend.onrender.com/search/${key}`);
    result =await result.json()
    if(result){
        setActivities(result);
    }
}

    
    return (
        <div className='product-list'>
            <h3>Activity list</h3>
            <input type="" className='search-box' placeholder='Search activity' onChange={searchHandle} />
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Time</li>
                <li>Date</li>
                <li>Description</li>
                <li>Location</li>
                <li>Slots</li>
                <li>Entry fee</li>
                <li>Contact</li>
                <li>Operation</li>
            </ul>
            {activities.length > 0?(
           
            
                activities.map((item,index)=>(
                    <ul key={item.name}>
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>{item.time}</li>
                        <li>{item.date}</li>
                        <li>{item.description}</li>
                        <li>{item.location}</li>
                        <li>{item.slots}</li>
                        <li>{item.entry_fee}</li>
                        <li>{item.contact}</li>
                        <li style={{"paddingTop":"3.5px"}}><button style={{"height":"25px","width":"50px","paddingLeft":"1px"}} onClick={()=>deleteActivity(item.name)}>Delete</button><hr/><hr/>
                        <Link to={"/update/"+item.name}>Update</Link></li>
                    </ul>
                ))
    ):(
        <p>No activities available.</p>
            
    )}<ToastContainer/></div>
    );

}
export default Activitylist