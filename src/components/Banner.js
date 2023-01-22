import React from 'react'
import p1 from '../Assets/Placekit/week 1 to 6 (o1).png'
import p2 from '../Assets/Placekit/week 7 to 12 (o1).png'
import p3 from '../Assets/Placekit/week 13 to 18 (o1).png'
import p4 from '../Assets/Placekit/week 19 to 24 (o1).png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';
import { Box, Container, Typography } from '@mui/material'
const Banner = () => {
    return (
        <Container maxWidth='md' sx={{ marginTop: "3rem" }}>
            <Typography variant='h4' sx={{ textAlign: "center", color: "white", fontSize: "2.5rem", margin: "2rem 0", fontFamily: "Roboto,Helvetica,Arial,sans-serif" }}> Placekit Schedule</Typography>
            <Swiper
                spaceBetween={5}
                slidesPerView={1}
                centeredSlides={true} loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay, Navigation, Pagination]}
            >
                <SwiperSlide>
                    <img src={p1} alt="" style={{ width: "100%", marginTop: "1rem" }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p2} alt="" style={{ width: "100%", marginTop: "1rem" }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p3} alt="" style={{ width: "100%", marginTop: "1rem" }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p4} alt="" style={{ width: "100%", marginTop: "1rem" }} />
                </SwiperSlide>
            </Swiper>
        </Container>
    )
}

export default Banner