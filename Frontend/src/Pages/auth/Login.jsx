import React, { useState } from "react";
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <p className="login-text">
        Do you have an account? <a href="#" className="login-link">Login Now</a>
      </p>
      <p className="login-subtext">or login as a <strong>Supplier</strong></p>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="login-input"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="login-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="login-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="login-input"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="login-input"
        />
        
        <div className="login-checkbox-container">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
            className="login-checkbox"
          />
          <label className="login-checkbox-label">I agree to the Terms and Conditions.</label>
        </div>

        <button
          type="submit"
          className="submit-button"
        >
          Login
        </button>
      </form>

      <p className="login-alternative-text">or login with</p>
      <button className="google-login-button">
        Google
      </button>
    </div>
  );
};

export default Login;
