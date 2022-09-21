import React from 'react'
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/bundle'
import Card from './Card';
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Testimonial2 = () => {
    return (
        <TestimonialWrapper>
            <div className='testimonial-head'>
                <p>Stories to Inspire</p>
            </div>
            <Swiper grabCursor={true} autoplay={{
                delay: 1500,
                disableOnInteraction: false,
            }} effect={'coverflow'} loop={true} centeredSlides={true} slidesPerView={3}
                coverflowEffect={{
                    rotate: 10,
                    stretch: 30,
                    depth: 1230, modifier: 1, slideShadows: true,
                }}
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 1,
                        
                    },
                    1280: {
                        slidesPerView: 2,
                        
                    },
                }}
            >
                <SwiperSlide><Card /></SwiperSlide>
                    {/* <SwiperSlide><Card /></SwiperSlide>
                    <SwiperSlide><Card /></SwiperSlide>
                    <SwiperSlide><Card /></SwiperSlide> */}

            </Swiper>
        </TestimonialWrapper >
    )
}

const TestimonialWrapper = styled.div`  
position:relative;
margin: 10rem 0;
-webkit-box-reflect: below 0.1px linear-gradient(transparent 70%,#000900);
max-width: 100vw;
.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right{
    background-image: none;
}
.testimonial-head{
    text-align: center;
    font-size: 3.5rem;
    color: white;
    margin-bottom: 3.1rem;
}
`
export default Testimonial2