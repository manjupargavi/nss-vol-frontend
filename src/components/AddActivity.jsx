import React from 'react';
const AddActivity = ()=>{
   
        const [name,setName] = React.useState('');
        const [time,setTime] = React.useState('');
        const [date,setDate] = React.useState('');
        const [description,setDescription] = React.useState('');
        const [location,setLocation] = React.useState('');
        const [slots,setSlots] = React.useState('');
        const [entry_fee,setFee] = React.useState('');
        const [contact,setContact] = React.useState('');
        const [error,setError] = React.useState(false);

        const addActivity = async()=>{

            if(!name || !time || !date || !description || !location || !slots || !entry_fee || !contact){
                setError(true);
                return false
            }
            console.log(name,time,date,description,location,slots,entry_fee,contact);
            const adminId = JSON.parse(localStorage.getItem("admin"))._id;
            console.log(adminId);
            let result = await fetch("https://nss-vol-backend.onrender.com/add-activity",{
                method:"post",
                body:JSON.stringify({name,time,date,description,location,slots,entry_fee,contact,adminId}),
                headers:{
                    "Content-type":"application/json"
                }
            });
            result = await result.json();
            console.log(result)

        }

    
    return(
        <div className="activity">
            
            <input type="text" placeholder="Enter activity name" className='inputbox' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            {error && !name && <span className='invalid-input'>Enter valid name</span>}
            <input type="text" placeholder="Enter activity time" className='inputbox' value={time} onChange={(e)=>{setTime(e.target.value)}}/>
            {error && !time && <span className='invalid-input'>Enter valid time</span>}
            <input type="date" placeholder="Enter activity date" className='inputbox' value={date} onChange={(e)=>{setDate(e.target.value)}}/>
            {error && !date && <span className='invalid-input'>Enter valid date</span>}
            <input type="text" placeholder="Enter activity description" className='inputbox' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            {error && !description && <span className='invalid-input'>Enter valid description</span>}
            <input type="text" placeholder="Enter activity location" className='inputbox' value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
            {error && !location && <span className='invalid-input'>Enter valid location</span>}
            <input type="text" placeholder="Enter activity slots" className='inputbox' value={slots} onChange={(e)=>{setSlots(e.target.value)}}/>
            {error && !slots && <span className='invalid-input'>Enter valid slots</span>}
            <input type="text" placeholder="Enter activity entry fee" className='inputbox' value={entry_fee} onChange={(e)=>{setFee(e.target.value)}}/>
            {error && !entry_fee && <span className='invalid-input'>Enter valid entry fee</span>}
            <input type="text" placeholder="Enter activity contact" className='inputbox' value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
            {error && !contact && <span className='invalid-input'>Enter valid contact</span>}
            <button className='appButton' onClick={addActivity}>Add activity</button>

        </div>
    )
}
export default AddActivity