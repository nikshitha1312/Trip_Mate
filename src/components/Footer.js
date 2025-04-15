import React from "react";
import './Footerstyle.module.css'

function Foter() {
    return (
        <footer>
        <div className="footer-container d-flex justify-content-around">
            <div className="contact-us">
            <h3>Contact Us</h3>
            <ul>
                <li>IIIT SONEPAT.</li>
                <li>DELHI</li>
                <li>Email: TripMate.com</li>
                <li>Phone: 555-555-5555</li>
            </ul>
            </div>
            <div className="company">
            <h3>Company</h3>
            <ul>
                <li>About Us</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
            </ul>
            </div>
            <div className="other-links">
            <h3>Other Links</h3>
            <ul>
                <li>Blog</li>
                <li>FAQ</li>
                <li>Careers</li>
            </ul>
            </div>
        </div>
        <p className="text-center">&copy; 2025 TripMate. All Rights Reserved.</p>
        </footer>
    );
    }
    
    
    const Footer = () => {
        return (
            <div>                 
              <Foter />
            </div>
          );
    };
    


export default Footer;