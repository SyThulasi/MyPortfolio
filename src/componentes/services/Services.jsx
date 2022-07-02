import React from "react";
import './services.css'
import {BiCheck} from "react-icons/bi";

const Services=()=>{
    return(
        <section id="services">
            <div className="divider div-transparent"></div>
            <h5>What I offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Hello, welcome to my website.say hi to all. i will say bye </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Hello, welcome to my website.say hi to all. i will say bye </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Hello, welcome to my website.say hi to all. i will say bye </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Hello, welcome to my website.say hi to all. i will say bye </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Hello, welcome to my website.say hi to all. i will say bye </p>
                        </li>
                    </ul>
                </article>


                <article className="service">
                    <div className="service__head">
                        <h3>WEB Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Hello, welcome to my website.say hi to all. i will say bye </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Hello, welcome to my website.say hi to all. i will say bye </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Hello, welcome to my website.say hi to all. i will say bye </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Hello, welcome to my website.say hi to all. i will say bye </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Hello, welcome to my website.say hi to all. i will say bye </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Hello, welcome to my website.say hi to all. i will say bye </p>
                        </li>
                    </ul>
                </article>


                <article className="service">
                    <div className="service__head">
                        <h3>Content Create</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Hello, welcome to my website.say hi to all. i will say bye </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Hello, welcome to my website.say hi to all. i will say bye </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Hello, welcome to my website.say hi to all. i will say bye </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Hello, welcome to my website.say hi to all. i will say bye </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Hello, welcome to my website.say hi to all. i will say bye </p>
                        </li>
                    </ul>
                </article>


            </div>
        </section>
    )
}

export default Services;