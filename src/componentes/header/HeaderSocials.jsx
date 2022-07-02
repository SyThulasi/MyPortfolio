import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaHackerrank } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';


const HeaderSocials = () =>{
    return(
        <div className="header__socials">

            <a href="https://www.linkedin.com/in/ravindran-abilash/" target="_blank"><FaLinkedin/></a>
            <a href="https://github.com/RavindranAbilash" target="_blank"><FaGithub/></a>
            <a href="https://www.hackerrank.com/e18_Abilash" target="_blank"><FaHackerrank/></a>
            <a href="https://www.facebook.com/ravindran.abilash.7/" target="_blank"><FaFacebook/></a>
        </div>
    )
}

export default HeaderSocials;