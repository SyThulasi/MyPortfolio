import React from "react";
import './experience.css'
import {BsPatchCheckFill} from "react-icons/bs";

const Experience = () => {
    return (
        <section id="experience" className= "experience__section">
            <div className="divider div-transparent"></div>
            <h5 className="first__heading__experience">What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>HTML</h4>
                                {/*<small className="text-light">Experienced</small>*/}
                                <div className="progress-line">
                                    <span></span>
                                </div>
                            </div>

                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>CSS</h4>
                                <div className="progress-line">
                                    <span></span>
                                </div>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>JavaScript</h4>
                                <div className="progress-line">
                                    <span></span>
                                </div>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>Boostrap</h4>
                                <div className="progress-line">
                                    <span></span>
                                </div>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>Tailwind</h4>
                                <div className="progress-line">
                                    <span></span>
                                </div>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>React</h4>
                                <div className="progress-line">
                                    <span></span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                    <div className="experience__frontend">
                        <h3>Frontend Development</h3>
                        <div className="experience__content">
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-ion"/>
                                <div>
                                    <h4>HTML</h4>
                                    <div className="progress-line">
                                        <span></span>
                                    </div>
                                </div>

                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-ion"/>
                                <div>
                                    <h4>CSS</h4>
                                    <div className="progress-line">
                                        <span></span>
                                    </div>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-ion"/>
                                <div>
                                    <h4>JavaScript</h4>
                                    <div className="progress-line">
                                        <span></span>
                                    </div>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-ion"/>
                                <div>
                                    <h4>Boostrap</h4>
                                    <div className="progress-line">
                                        <span></span>
                                    </div>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-ion"/>
                                <div>
                                    <h4>Tailwind</h4>
                                    <div className="progress-line">
                                        <span></span>
                                    </div>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-ion"/>
                                <div>
                                    <h4>React</h4>
                                    <div className="progress-line">
                                        <span></span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>Node JS</h4>
                                <div className="progress-line">
                                    <span></span>
                                </div>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>MongoDB</h4>
                                <div className="progress-line">
                                    <span></span>
                                </div>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>PHP</h4>
                                <div className="progress-line">
                                    <span></span>
                                </div>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>Python</h4>
                                <div className="progress-line">
                                    <span></span>
                                </div>
                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;