import React, { useState, useEffect } from 'react';
import { Menu } from "lucide-react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

function Navbar() {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleClickOutside = (event) => {
    if (drawerOpen && !event.target.closest('.drawer') && !event.target.closest('.login-and-signup')) {
      setDrawerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [drawerOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src={logo}
          alt="Global Farms Logo"
          className="logo"
        />
        <div className="nav-links">
          <a href="#">About us</a>
          <a href="#">News</a>
          <a href="#">Plans</a>
          <a href="#">Know Your Industry</a>
          <a href="#">How it works</a>
          <a href="#">Contact us</a>
          <a href="#">FAQs</a>
        </div>
      </div>
      <div className="navbar-right">
        <button className="post-button">Post a Product</button>

        <div className="login-and-signup" onClick={toggleDrawer}>
          <Avatar src="/broken-image.jpg" className="user-img"/>
          <button className="login-button" >Login or Register</button>
        </div>

        <button className="menu-button">
            <Menu />
        </button>

        {drawerOpen && (
        <div className="drawer">
          <div className="drawer-content">
            <h2>New to Organic Farms?</h2>
            <p><Link to="/register">Register</Link> now and become a member today!</p>
            <hr />
            <h2>Already a Member?</h2>
            <Button variant="contained" color="success">
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
      )}

      </div>
    </nav>
  );
}

export default Navbar;
