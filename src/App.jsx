import React from "react";
import "./App.css"
import Header from "./componentes/header/Header";
import Nav from "./componentes/nav/Nav";
import About from "./componentes/about/About";
import Experience from "./componentes/experience/Experience";
// import Services from "./componentes/services/Services";
import Portfolio from "./componentes/portfolio/Portfolio";
import Blogs from "./componentes/testimonials/Blogs";
import Contact from "./componentes/contact/Contact";
import Footer from "./componentes/footer/Footer";

const App=()=>{
    return(
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            {/*<Services/>*/}
            <Portfolio/>
            <Blogs/>
            <Contact/>
            <Footer/>

        </>
    )
}
export default App;