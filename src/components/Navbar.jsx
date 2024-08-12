import React from 'react'
import Logo from '../assets/minilogo.png'
import { useState } from 'react'
import {Navigate} from 'react-router-dom'

const Navbar = () => {

  const [showLogin,setShowLogin] = useState(false);

    if(showLogin) {
        return <Navigate to='/Login' target='_blank' />;
    }

  return (
    
      <div id="nav">
        <div className="nav--container">
        <div id="image">
            <img src={Logo} alt="image" className="logo"/>

        </div>
        <div className="list--container">
        
            <div id="stid" className="list--item">Student ID: 10789587</div>
            <div id="stname" className="list--item">Welcome Pratham</div>
            <div id="login" className="list--item" onClick={() => setShowLogin(true)}>LOG IN</div>
        
    </div>
</div>
    </div>

    
  )
}

export default Navbar
