import React from 'react'
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">

      <h1>Register</h1>

      <div className='card'>
        <h2>Farmer Register</h2>
        <button><Link to="/register/farmer-registration">Register as Farmer</Link></button>
      </div>
      <div className='card'>
        <h2>Buyer Register</h2>
        <button><Link to="/register/sign-up">Register as Buyer</Link></button>
      </div>
    </div>
  )
}

export default Register