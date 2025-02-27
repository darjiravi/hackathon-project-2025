import React from "react";
import "./Footer.css"; // Assuming you have a CSS file for styling
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <img src={logo} alt="Global Farms Logo" className="logo" />
          <h2>About Us</h2>
          <p>
            We are a team of passionate developers building awesome projects.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 Organic Farms | All Rights Reserved
      </div>
    </footer>
  );
}

// footer -2 

// import React from 'react';  
// import './Footer.css'; // Import your custom CSS file  

// const Footer = () => {  
//   return (  
//     <footer className="footer">  
//       <div className="footer-top">  
//         <div className="social-links">  
//           <span>Get connected with us on social networks:</span>  
//           <a href="#" className="icon">Facebook</a>  
//           <a href="#" className="icon">Twitter</a>  
//           <a href="#" className="icon">Google</a>  
//           <a href="#" className="icon">Instagram</a>  
//           <a href="#" className="icon">LinkedIn</a>  
//           <a href="#" className="icon">GitHub</a>  
//         </div>  
//       </div>  

//       <div className="footer-content">  
//         <div className="footer-section">  
//           <h6 className="footer-title">Company Name</h6>  
//           <p>  
//             Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,  
//             consectetur adipisicing elit.  
//           </p>  
//         </div>  

//         <div className="footer-section">  
//           <h6 className="footer-title">Products</h6>  
//           <p><a href="#!" className="footer-link">Angular</a></p>  
//           <p><a href="#!" className="footer-link">React</a></p>  
//           <p><a href="#!" className="footer-link">Vue</a></p>  
//           <p><a href="#!" className="footer-link">Laravel</a></p>  
//         </div>  

//         <div className="footer-section">  
//           <h6 className="footer-title">Useful links</h6>  
//           <p><a href="#!" className="footer-link">Pricing</a></p>  
//           <p><a href="#!" className="footer-link">Settings</a></p>  
//           <p><a href="#!" className="footer-link">Orders</a></p>  
//           <p><a href="#!" className="footer-link">Help</a></p>  
//         </div>  

//         <div className="footer-section">  
//           <h6 className="footer-title">Contact</h6>  
//           <p>New York, NY 10012, US</p>  
//           <p>Email: info@example.com</p>  
//           <p>Phone: +01 234 567 88</p>  
//         </div>  
//       </div>  

//       <div className="footer-bottom">  
//         <p>© 2021 Copyright:   
//           <a href="https://example.com" className="footer-link"> example.com</a>  
//         </p>  
//       </div>  
//     </footer>  
//   );  
// };  

// export default Footer;  