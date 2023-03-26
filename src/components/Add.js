import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore/lite";
import { db } from './firebase';


function Add() {
    const [name , setname] = useState('');
    const [age, setage] = useState('');
    const [city, setcity] = useState('');
    const submit = async () =>{
         await addDoc(collection(db, "users"), {
            name: name,
            country:age,
            city:city,
          });
    }
  return (
    <div>
      <div className='container'>
        <div className='form-group'>
            <label for="name">Name:</label>
            <input type="text" className='form-control' value={name} onChange={(e)=>{setname(e.target.value);}}/>
        </div>
        <div className='form-group'>
            <label for="age">Age:</label>
            <input type="text" className='form-control' value={age} onChange={(e)=>{setage(e.target.value);}}/>
        </div>
        <div className='form-group'>
            <label for="city">City:</label>
            <input type="text" className='form-control' value={city} onChange={(e)=>{setcity(e.target.value);}}/>
        </div>
        <button type="submit" class="btn btn-primary" onClick={() => { submit(); }}>Submit</button>
      </div>
    </div>
  )
}
export default Add;
