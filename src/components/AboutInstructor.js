
import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
const Wrap = styled.div`
.card{
    position: relative;
    background-color: #fff;
    border-radius: 20px;
    height: 460px;
    width: 20rem;
    margin: 20px 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.card .card-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    position: relative;
    z-index: 100;
}

    position: relative;
    /* width: 450px;
    width: 1075px; */
    margin-right: 1rem;
    display: flex;
    align-items: center;

.card .image{
    height: 140px;
    width: 140px;
    border-radius: 50%;
    padding: 3px;
    background: #fff;
    box-shadow: 0px -1px 4px 2px rgba(0, 0, 0, 0.25);
}
 .card .image img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #fff;
}
.box3{
    position: absolute;
    width: 100%;
    height: 30%;
    border-radius: 20px 20px 0 0;
        background: linear-gradient(106.32deg,#ff37d4 14.23%, rgb(0 45 240) 139.97%);
}
.card .media-icons{
    position: absolute;
    top: 10px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card .media-icons i{
    color: #fff;
    opacity: 0.7;
    margin-top: 10px;
    transition: all 0.3s ease;
    cursor: pointer;
}
.card .media-icons i:hover{
    opacity: 1;
}
.card .name-profession{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
}
.name-profession .name{
    font-size: 20px;
    font-weight: 600;
    color: #222;
}
.name-profession .profession{
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    color: #333;
}
.card .rating{
    display: flex;
    align-items: center;
    margin-top: 18px;
}
.card .rating i{
    font-size: 18px;
    margin: 0 2px;
    color: orange;
}
 .card .about{
    display: flex;
    text-align: center;
    color: #444;
    margin-top: 45px;
    margin-bottom: 5px; 
    font-size: 0.881rem;
}
.card .button{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}
.card .b1 button{
    background: #f3a323;
}
.card .b2 button{
    background: #14bff2;
}
.card .b3 button{
    background: #f337e2;
}
.card .button button{
    outline: none;
    border: none;
    color: #fff;
    padding: 8px 22px;
    border-radius: 5px;
    font-size: 14px;
    transition: all 0.3s ease;
    cursor: pointer;
}
.card .button button:hover{
    opacity: 0.8;
}


`

const AboutInstructor = ({ data }) => {
    const instructerData = data.instructer;
    return (
        <Container maxWidth="lg" sx={{ marginBottom: "3rem" }} id="aboutprogram">
            <Typography variant='h4' sx={{ textAlign: "center", color: 'white' }}> Our Instructors</Typography>

            <Swiper
                spaceBetween={5}
                slidesPerView={3}
                centeredSlides={true} loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                breakpoints={{
                    340: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay]}
            >
                {
                    instructerData.map((card, index) => (<SwiperSlide key={index}>
                        < Wrap >
                            <div class="container">
                                <div class=" content">
                                    <div class=" card">
                                        <div class="box3"></div>
                                        <div class="card-content">
                                            <div class="image">
                                                <img src={card.instructerimg} alt="" />
                                            </div>
                                            {/* <div class="media-icons">
                                    <LinkedInIcon />
                                </div> */}
                                            <div class="name-profession">
                                                <span class="name">{card.name}</span>
                                                <span class="profession">{card.desig}</span>
                                            </div>
                                            <div class="about">
                                                <p>{card.about}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ Wrap >
                    </SwiperSlide>))
                }
            </Swiper>
        </Container >
    )
}

export default AboutInstructor