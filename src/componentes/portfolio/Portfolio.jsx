import React from "react";
import './portfolio.css'

import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Corals Protector",
        github: "https://github.com/SyThulasi/e18-3yp-Corals-Protector",
        demo: "google.com"
    },
    {
        id: 2,
        image: IMG3,
        title: "Cinema App",
        github: "https://github.com/SyThulasi/CinemaApp",
        demo: "google.com"
    },
    {
        id: 3,
        image: IMG2,
        title: "Automated Medical Image Annotation for Dataset Building",
        github: "https://github.com/SyThulasi/e18-4yp-Automated-Medical-Image-Annotation-for-Dataset-Building/tree/main",
        demo: "google.com"
    },
    // {
    //     id: 4,
    //     image: IMG4,
    //     title: "This is a portfolio item title",
    //     github: "github.com",
    //     demo: "google.com"
    // },
    // {
    //     id: 5,
    //     image: IMG5,
    //     title: "This is a portfolio item title",
    //     github: "github.com",
    //     demo: "google.com"
    // },
    // {
    //     id: 6,
    //     image: IMG6,
    //     title: "This is a portfolio item title",
    //     github: "www.github.com",
    //     demo: "www.google.com"
    // }
]

const Portfolio = () => {
    return (
        <section className="section__portfolio" id="portfolio">
            <div className="divider div-transparent"></div>
            <h5 className="first__heading">My recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}, index) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn" target="_blank">Github</a>
                                    {/*<a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>*/}
                                </div>
                            </article>
                        )
                    })
                }

            </div>

            <Swiper className="container testimonials_container"
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{clickable: true}}>
                {
                    data.map(({id, image, title, github, demo}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <article key={id} className="portfolio__item">
                                    <div className="portfolio__item-image">
                                        <img src={image} alt={title}/>
                                    </div>
                                    <h3>{title}</h3>
                                    <div className="portfolio__item-cta">
                                        <a href={github} className="btn" target="_blank">Github</a>
                                    </div>
                                </article>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    )
}

export default Portfolio;