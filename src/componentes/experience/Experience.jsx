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
                    <h3>Programming Languages</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>Python</h4>
                                {/*<small className="text-light">Experienced</small>*/}
                                <div className="progress-line python">
                                    <span></span>
                                </div>
                            </div>

                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>Java</h4>
                                <div className="progress-line java">
                                    <span></span>
                                </div>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>JavaScript</h4>
                                <div className="progress-line javascript">
                                    <span></span>
                                </div>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>C</h4>
                                <div className="progress-line c">
                                    <span></span>
                                </div>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>ARM assembly</h4>
                                <div className="progress-line arm">
                                    <span></span>
                                </div>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>Verilog HDL</h4>
                                <div className="progress-line verilog">
                                    <span></span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                    <div className="experience__frontend">
                        <h3>Frontend & Backend & Database</h3>
                        <div className="experience__content">
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-ion"/>
                                <div>
                                    <h4>HTML</h4>
                                    <div className="progress-line html">
                                        <span></span>
                                    </div>
                                </div>

                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-ion"/>
                                <div>
                                    <h4>CSS</h4>
                                    <div className="progress-line css">
                                        <span></span>
                                    </div>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-ion"/>
                                <div>
                                    <h4>React</h4>
                                    <div className="progress-line react">
                                        <span></span>
                                    </div>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-ion"/>
                                <div>
                                    <h4>Spring</h4>
                                    <div className="progress-line spring">
                                        <span></span>
                                    </div>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-ion"/>
                                <div>
                                    <h4>Firebase</h4>
                                    <div className="progress-line firebase">
                                        <span></span>
                                    </div>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-ion"/>
                                <div>
                                    <h4>MySql</h4>
                                    <div className="progress-line mysql">
                                        <span></span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                <div className="experience__frontend">
                    <h3>Mobile App Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>Android</h4>
                                <div className="progress-line android">
                                    <span></span>
                                </div>
                            </div>

                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>Flutter</h4>
                                <div className="progress-line flutter">
                                    <span></span>
                                </div>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>Dart</h4>
                                <div className="progress-line dart">
                                    <span></span>
                                </div>
                            </div>
                        </article>
                        {/*<article className="experience__details">*/}
                        {/*    <BsPatchCheckFill className="experience__details-ion"/>*/}
                        {/*    <div>*/}
                        {/*        <h4>Reactnative</h4>*/}
                        {/*        <div className="progress-line">*/}
                        {/*            <span></span>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</article>*/}
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Others<br/><br/></h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>Adobe Photoshop</h4>
                                <div className="progress-line ps">
                                    <span></span>
                                </div>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>Adobe illustrator</h4>
                                <div className="progress-line il">
                                    <span></span>
                                </div>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>Adobe premiere</h4>
                                <div className="progress-line pr">
                                    <span></span>
                                </div>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>Adobe XD</h4>
                                <div className="progress-line xd">
                                    <span></span>
                                </div>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>Autocad</h4>
                                <div className="progress-line autocad">
                                    <span></span>
                                </div>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-ion"/>
                            <div>
                                <h4>Proteus</h4>
                                <div className="progress-line proteus">
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