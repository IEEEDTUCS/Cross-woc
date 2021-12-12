import React from 'react';
import '../styles/Footer.css'
import logo from '../img/footer/crosswoc.png';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
    
     //To get ongoing year
     const currentYear = new Date().getFullYear();

    return (
        <div className='Footer text-center' id='contact'>
            
            
            {/* Contact Us Heading */}
            <h1 className="footer-heading">Contact Us</h1>  

            {/* Social Media Icons */}
            <div className="footer-media">
                <a className="footer-icon" href="/" target="_blank" title="Facebook"><FaFacebook size="20px" color="purple" /></a>
                <a className="footer-icon" href="/" target="_blank" title="Twitter"><FaTwitter size="20px" color="purple" /></a>
                <a className="footer-icon" href="/" target="_blank" title="Instagram"><FaInstagram size="20px" color="purple" /></a>
                <a className="footer-icon" href="/" target="_blank" title="Linkedin"><FaLinkedinIn size="20px" color="purple" /></a>
                <a className="footer-icon" href="/" target="_blank" title="Mail"><FaEnvelope size="20px" color="purple" /></a>
            </div>

            {/* Copyright Item */}
            <div className="footer-copyright-item"> 
                <p>Made with ❤️ by <a className="ieeelink" href="https://ieeedtu.in/" target="_blank" rel="noreferrer">  <span className="span"> IEEE DTU</span></a></p>
            </div>

            <div className="footer-copyright-item">
                <p>© Copyright {currentYear} IEEE DTU. All rights reserved.</p>
            </div>

        </div>
    )
}

export default Footer
