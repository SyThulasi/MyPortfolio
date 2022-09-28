import React from "react";
import './header.css'
import CTA from "./CTA";
import Thulasi from '../../assets/Thulasi2.png'
import HeaderSocials from "./HeaderSocials";

import {BsCaretDownSquareFill} from "react-icons/bs";


const Header=()=>{
    return(
        <header>
            <div className="container header__container">
                <div className="sub__container">
                    <div className="details__container">
                        <h4>Hello I am</h4>
                        <h1>Thulasiyan Yogeswaran</h1>
                        <h5 className="text-light heading1">Undergraduate Computer Engineering student at <br/>University of Peradeniya</h5>
                        <CTA/>
                        <HeaderSocials/>
                    </div>
                    <div className="me__container">
                        <div className="me">
                            <img src={Thulasi} alt="Thulasi"/>
                        </div>
                    </div>
                </div>

                <a href="#contact" className="scroll__down"><BsCaretDownSquareFill/></a>
            </div>
        </header>
    )
}

export default Header;