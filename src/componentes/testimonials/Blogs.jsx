import React from "react";
import './Blogs.css'

import Avatar1 from "../../assets/avatar1.jpg"
import Avatar2 from "../../assets/avatar2.jpg"
import Avatar3 from "../../assets/avatar3.jpg"
import Avatar4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import {Pagination  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: Avatar1,
        title: "Most popular Hooks in ReactJs",
        name: "Ravindran Abilash",
        link: "medium.com",
        review:"imen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..."
    },
    {
        avatar: Avatar2,
        title: "Most popular Hooks in ReactJs",
        name: "Ravindran Abilash",
        link: "medium.com",
        review:"imen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        avatar: Avatar3,
        title: "Most popular Hooks in ReactJs",
        name: "Ravindran Abilash",
        link: "medium.com",
        review:"imen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        avatar: Avatar4,
        title: "Most popular Hooks in ReactJs",
        name: "Ravindran Abilash",
        link: "medium.com",
        review:"imen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]

const Blogs=()=>{
    return(
        <section id="blogs">
            <div className="divider div-transparent"></div>
            <h5 className="first__heading__blogs">My Recent Blogs</h5>
            <h2>Blogs</h2>

            <Swiper className="container testimonials_container"
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                {
                    data.map(({avatar,title,name,link, review},index)=> {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <h2 style={{marginBottom:"1rem"}}>{title}</h2>
                                <div className="client_avatar">
                                    <img src={avatar} alt="avatar one"/>
                                </div>
                                <h5 className="client__name">Author : {name} </h5>
                                <small className="client__review">
                                    {review}
                                </small>
                                <a style={{marginTop:"1rem"}} className="btn" href={link} target="_blank">See More</a>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>

        </section>
    )
}

export default Blogs;