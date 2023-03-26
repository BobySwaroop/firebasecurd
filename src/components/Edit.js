import { doc, getDoc } from 'firebase/firestore/lite';

import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from './firebase';

function Edit() {
    const {id} = useParams();
    const [name , setname] = useState('');
    const [age, setage] = useState('');
    const [city, setcity] = useState('');
    const [ename, setename] = useState('');
    const [eage, seteage] = useState('');
    const [ecity, setecity] = useState('');
    const decRef = doc(db, 'users', id);
    const getd = async() =>{
        const usersSnapshot = await getDoc(decRef);
        setename(usersSnapshot.data().name);
        seteage(usersSnapshot.data().age);
        setecity(usersSnapshot.data().city);
    }
    
    const update = () => {

    }
    
  return (
    <div>
      <h1>Edit Page</h1>
      <div className='form-group'>
            <label for="name">Name:</label>
            <input type="text" className='form-control' value={name} onChange={(e)=>{setname(e.target.value);}} placeholder={ename}/>
        </div>
        <div className='form-group'>
            <label for="age">Age:</label>
            <input type="text" className='form-control' value={age} onChange={(e)=>{setage(e.target.value);}} placeholder={eage}/>
        </div>
        <div className='form-group'>
            <label for="city">City:</label>
            <input type="text" className='form-control' value={city} onChange={(e)=>{setcity(e.target.value);}} placeholder={ecity}/>
        </div>
        <button type="submit" class="btn btn-primary" onClick={() => { update(); }}>Update</button>
    </div>
  )
}
export default Edit;
