import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Server.scss'

function Server() {
  const [server, setBoykot] = useState([]) 

  
  async function getBoykot() {
    try {
      const res = await axios.get('https://boykot.kg/api/v1/products/')
      console.log( res.data.results); 
      setBoykot(res.data.results) 
    } catch (error) {
      console.log( error);
    }
  }

  useEffect(() => {
    getBoykot(); 
  }, []);
 
  
  return (
    <div className='xxl'>
      {
             
        server.map((x) => (
        <div className='xx' key={x.id}>
          <h3>{x.brand}</h3>
          <img src={x.logo}  />
        </div>
      ))
       
      }
    </div>
  )
}

export default Server

