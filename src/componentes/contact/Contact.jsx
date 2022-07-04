import React from "react";
import './contact.css'
import {MdOutlineEmail} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs";
import {RiMessengerLine} from "react-icons/ri";

import {useRef} from "react";
import emailjs from "emailjs-com"

const Contact=()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        //https://www.emailjs.com/
        emailjs.sendForm('service_7v3u30l', 'template_y1ft6fq', form.current, 'K-dx77obcTa8W2LZ6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return(
        <section style={{height:"60vh"}} id="contact">
            <div className="divider div-transparent"></div>
            <h5 style={{marginTop:"1rem"}}>Do you like to talk</h5>
            <h2>Contact</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>abilash@gamil.com</h5>
                        <a href="mailto:sythulasi.6@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon"/>
                        <h4>Messenger</h4>
                        <h5>Sy Thulasi</h5>
                        <a href="https://m.me/S.Y.THULA" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>Whatsapp</h4>
                        <h5>0094779293112</h5>
                        <a href="https://api.whatsapp.com/send?phone+=0094779293112" target="_blank">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your message here" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;