import React, { useEffect, useState } from 'react';
import Section_title from '../../components/Section_title';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Review.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Review = () => {
    const [review, setReview] = useState([])
    useEffect(()=>{
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    return (
        <>
           <Section_title subheading={"--- What Our Client Say ---"} heading={"TESTIMONIALS"}/>

     <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
      </Swiper>
            
        </>
    );
};

export default Review;