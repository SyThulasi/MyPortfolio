import React from "react";
import './about.css'

import ME from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

import Abilash4 from '../../assets/Abilash4.png'

const About=()=>{
    return(
        <section id="about">
            <div className="divider div-transparent"></div>
            <h5 className="first__heading">Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                <div className="about__me-image">
                    <img src={Abilash4} alt="Abilash"/>
                </div>
                </div>


            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <FaAward className="about__icon"/>
                        <h5>Experience</h5>
                        <small>3+ Years Working</small>
                    </article>
                    <article className="about__card">
                        <FiUsers className="about__icon"/>
                        <h5>Clients</h5>
                        <small>200+ Worldwide</small>
                    </article>
                    <article className="about__card">
                        <VscFolderLibrary className="about__icon"/>
                        <h5>Projects</h5>
                        <small>80+ Completed</small>
                    </article>
                </div>

                <p>
                    &emsp;I am currently doing my undergraduate degree under computing department of Faculty of engineering, University of Peradeniya.
                    I am a passionate tech enthusiast and currently i engaged myself with some web based projects.
                    I also got interest to develop apps and website through full stack web development using latest technologies.
                    I hope to learn machine learning and passionate to join some AI project researches in near future.<br/><br/>&emsp;
                    I love photography and editing which always keeps me refreshed.
                    And also I am too much addicted with travelling which makes me to explore the world and sometimes myself.
                    I am good at playing volley ball which keeps me physically strong.
                </p>
                <a href="contact" className="btn btn-primary">Let's Talk</a>
            </div>
            </div>
        </section>
    )
}

export default About;