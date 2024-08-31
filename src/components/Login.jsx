import React from 'react'
import '../Login.css'

const Login = () => {
  return (
    
      <div className="modal">
        <div className="modal-bg">
            <div className="modal-1">
                <h1>Login</h1>
                <button className="closeBtn" ><i className="fa-solid fa-x"></i></button>
            </div>
            <div className="login">
                <input type="email" placeholder="Enter your email" className="input--field" />

                <input type="password"  placeholder="Enter your password" className="input--field" />

                <button placeholder="Login" id="loginbtn">Login</button>

                <div className='p'>
                    Not a member? <a href="#" className="register">Register</a>
                
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Login
