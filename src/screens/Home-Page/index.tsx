import React, { useEffect, useState } from "react";
import './style.css';
import { users } from '../../data/users';

function Home() {  

  

  return (
    
    <div className='back'>
      <div className='box'>
   
   {users.map(user => {
     return (
      <div key={user.id}>ID= {user.id} e email= {user.email}</div> 
      )
    })}

  </div>
  </div>
  )
}

export default Home;