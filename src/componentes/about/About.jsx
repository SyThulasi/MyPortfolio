import React from "react";
import './about.css'

import ME from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {BsCalendarCheck, BsPhone} from "react-icons/bs";

import Thulasi4 from '../../assets/Thulasi3.png'
import {BsPatchCheckFill} from "react-icons/bs";
import {GoLocation} from "react-icons/go";
import {AiOutlineMail} from "react-icons/ai";

const About = () => {
    return (
        <section id="about" className="about__section">
            <div className="divider div-transparent"></div>
            <h5 className="first__heading">Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Thulasi4} alt="Thulasi"/>
                    </div>
                </div>


                <div className="about__content">
                    {/*<div className="about__cards">*/}
                    {/*    <article className="about__card">*/}
                    {/*        <FaAward className="about__icon"/>*/}
                    {/*        <h5>Experience</h5>*/}
                    {/*        <small>1+ Years</small>*/}
                    {/*    </article>*/}
                    {/*    /!*<article className="about__card">*!/*/}
                    {/*    /!*    <FiUsers className="about__icon"/>*!/*/}
                    {/*    /!*    <h5>Clients</h5>*!/*/}
                    {/*    /!*    <small>200+ Worldwide</small>*!/*/}
                    {/*    /!*</article>*!/*/}
                    {/*    <article className="about__card">*/}
                    {/*        <VscFolderLibrary className="about__icon"/>*/}
                    {/*        <h5>Projects</h5>*/}
                    {/*        <small>3 Completed</small>*/}
                    {/*    </article>*/}
                    {/*</div>*/}
                    <p>
                        &emsp;Hello!. I'm Thulasiyan Yogeswaran. I am a dedicated, hardworking, and self motivated
                        individual with the willingness
                        to explore new things in the field of the computer engineering and I engaged myself with some
                        Flutter based Mobile application
                        projects. I hope to learn machine learning and passionate to join some AI project researches in
                        near future. <br/><br/>
                        &emsp;I am seeking a position where my skills can utilize and
                        get experience as a trainee to become a successful professional in the industry.
                        {/*&emsp;I am currently doing my undergraduate degree under computing department of Faculty of engineering, University of Peradeniya.*/}
                        {/*I am a passionate tech enthusiast and currently i engaged myself with some web based projects.*/}
                        {/*I also got interest to develop apps and website through full stack web development using latest technologies.*/}
                        {/*I hope to learn machine learning and passionate to join some AI project researches in near future.<br/><br/>&emsp;*/}
                        {/*I love photography and editing which always keeps me refreshed.*/}
                        {/*And also I am too much addicted with travelling which makes me to explore the world and sometimes myself.*/}
                        {/*I am good at playing volley ball which keeps me physically strong.*/}
                    </p>
                    <div className="bio_content">

                        <div className={'bio_tag__box'}>
                            <h3 className='bio__tag'>Bio</h3>
                        </div>
                        <div className="bio__item-cta">
                            <BsCalendarCheck className="about__details-ion"/>
                            <a1>Age</a1>
                            <a1>&emsp;&emsp;: 23</a1>
                        </div>
                        <div className="bio__item-cta">
                            <AiOutlineMail className="about__details-ion"/>
                            <a1>Email</a1>
                            <a1>&nbsp;&emsp;: sythulasi.6@gmail.com</a1>
                        </div>
                        <div className="bio__item-cta">
                            <BsPhone className="about__details-ion"/>
                            <a1>Phone</a1>
                            <a1>&emsp;: 0094762871954</a1>
                        </div>
                        <div className="bio__item-cta">
                            <GoLocation className="about__details-ion"/>
                            <a1>Address</a1>
                            <div className="address">
                                <a1>: Kuddip pillaiyar lane, <br/>Kondavil west,<br/>Kondavil, <br/>Jaffna,<br/>Srilanka.</a1>
                            </div>
                        </div>
                    </div>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>

            </div>
            <section className="timeline-section">
                    <div className= "education">
                        <h2>Education</h2>
                    </div>
                <div className="timeline-items">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">Now</div>
                        <div className="timeline-content">
                            <h3>BSc. in Computer Engineering</h3>
                            <h5>University Of Peradeniya</h5>
                            <p>Current GPA : 3.47/4.00</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2018</div>
                        <div className="timeline-content">
                            <h3>Physical Science</h3>
                            <h5>J/ Kokuvil Hindu College</h5>
                            <p>Passed G.C.E.(A/L) examination with 2A’s B</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2010</div>
                    </div>
                </div>
            </section>


        </section>
    )
}

export default About;