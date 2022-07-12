import React from "react";
import './footer.css'
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {IoLogoTwitter} from "react-icons/io";

const Footer=()=>{
    return(
        <footer className='footer__container'>
            <a href="#" className="footer_logo">THULASIYAN</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.facebook.com/S.Y.THULA/"><FaFacebookF/></a>
                <a href="https://www.instagram.com/s_y_thulasi/"><FiInstagram/></a>
                <a href="https://www.twitter.com/s_y_thulasi/"><IoLogoTwitter/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; THULASIYAN YOGESWARAN. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer;