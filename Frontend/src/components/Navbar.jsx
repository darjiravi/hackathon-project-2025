import { Menu } from "lucide-react";
import logo from "../assets/react.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src={logo || "/placeholder.svg"}
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
        <button className="login-button">Login or Register</button>
        <button className="menu-button">
          <Menu />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
