import React from "react";
import './header.css'
import CTA from "./CTA";
import ME from '../../assets/me.png'
import Abilash2 from '../../assets/Abilash2.png'
import HeaderSocials from "./HeaderSocials";

import {BsCaretDownSquareFill} from "react-icons/bs";


const Header=()=>{
    return(
        <header>
            <div className="container header__container">
                <div className="sub__container">
                <div className="details__container">
                    <h4>Hello I am</h4>
                    <h1>Ravindran Abilash</h1>
                    <h5 className="text-light heading1">Intermediate at - ReactJs,Node,Express and MongoDb.<br/> Love to play Volleyball.
                        <br/>Undergraduate @University Of Peradeniya</h5>
                    <CTA/>
                    <HeaderSocials/>
                </div>
                    <div className="me__container">
                <div className="me">
                    <img src={Abilash2} alt="Abilash"/>
                </div>
                    </div>
                </div>

                <a href="#contact" className="scroll__down"><BsCaretDownSquareFill/></a>
            </div>
        </header>
    )
}

export default Header;