import React, { useEffect, useRef, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "./firebase";
import { Link } from 'react-router-dom';
import { CSVLink } from "react-csv";
const headers = [
  {label: 'Name', key: 'name'},
  {label: 'Age', key: 'age'},
  {label: 'City', key: 'city'},
]

function Showdata() {

  const [datadownload, setusers] = useState([]);
  async function getCities(db) {
    const citiesCol = collection(db, "users");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id}));
    const csvDownloadRef = useRef(null);

    setusers(cityList);
    setTimeout(()=>{
      csvDownloadRef.current.Link.click();
      console.log(cityList);

    },500);
    
  }
  useEffect(() => {
    getCities(db);
  });
  return (
    <div>
      
      {/* <table class="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => {
            return (
              <tr>
                <td>{u.name}</td>
                <td>{u.age}</td>
                <td>{u.city}</td>
                <td>
                  <Link to={`/edit/${u.id}`}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
      {/* <CSVLink data ={users} headers={headers}> */}
      <CSVLink 
      data={datadownload} headers={headers} filename="async.csv" target="_blank" ref={csvDownloadRef}
      />
      <button className="btn btn-success mb-4" onClick={getCities}>Download</button>
      {/* </CSVLink> */}
      
    </div>
  );
}
export default Showdata;
