import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Category.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Category = () => {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                }}
                // pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src="src/assets/Home_img/slide1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="src/assets/Home_img/slide2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="src/assets/Home_img/slide3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="src/assets/Home_img/slide4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="src/assets/Home_img/slide5.jpg" />
                </SwiperSlide>
            </Swiper>

        </>
    );
};

export default Category;