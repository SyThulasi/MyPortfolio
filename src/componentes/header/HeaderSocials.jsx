import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaHackerrank } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';


const HeaderSocials = () =>{
    return(
        <div className="header__socials">

            <a href="https://www.linkedin.com/in/thulasiyan-yogeswaran-5ba1221a4/" target="_blank"><FaLinkedin/></a>
            <a href="https://github.com/SyThulasi" target="_blank"><FaGithub/></a>
            <a href="https://www.hackerrank.com/Sy_Thulasi" target="_blank"><FaHackerrank/></a>
            <a href="https://www.facebook.com/S.Y.THULA/" target="_blank"><FaFacebook/></a>
        </div>
    )
}

export default HeaderSocials;