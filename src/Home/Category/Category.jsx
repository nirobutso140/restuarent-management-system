import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Category.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Section_title from '../../components/Section_title';

const Category = () => {
    return (
        <>
            <Section_title subheading={"--- From 10am to 11pm ---"} heading={"ORDER ONLINE"} />
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
                    <h3 className='text-center uppercase -mt-10 text-white'>salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="src/assets/Home_img/slide2.jpg" />
                    <h3 className='text-center uppercase -mt-10 text-white'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="src/assets/Home_img/slide3.jpg" />
                    <h3 className='text-center uppercase -mt-10 text-white'>Soupes</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="src/assets/Home_img/slide4.jpg" />
                    <h3 className='text-center uppercase -mt-10 text-white'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="src/assets/Home_img/slide5.jpg" />
                    <h3 className='text-center uppercase -mt-10 text-white'>salads</h3>
                </SwiperSlide>
            </Swiper>

        </>
    );
};

export default Category;