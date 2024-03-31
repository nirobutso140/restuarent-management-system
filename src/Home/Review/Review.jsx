import React, { useEffect, useState } from 'react';
import Section_title from '../../components/Section_title';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Review.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Review = () => {
  const [review, setReview] = useState([])
  useEffect(() => {
    fetch('review.json')
      .then(res => res.json())
      .then(data => setReview(data))
  }, [])
  return (
    <>
      <Section_title subheading={"--- What Our Client Say ---"} heading={"TESTIMONIALS"} />

      <Swiper
        // pagination={{
        //   type: 'progressbar',
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          review.map(reviewData => <>
            <SwiperSlide key={reviewData._id}>
              <div className='mx-14 text-center flex flex-col items-center'>
                <Rating
                  style={{ maxWidth: 120 }}
                  value={reviewData.rating}
                  // onChange={setRating}
                />
                <p className='my-5' style={{color: 'gray'}}>{reviewData.details}</p>
                <p className='text-amber-500 text-lg uppercase'>{reviewData.name}</p>
              </div>
            </SwiperSlide>
          </>)
        }
      </Swiper>

    </>
  );
};

export default Review;