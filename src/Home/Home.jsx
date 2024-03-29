import React from 'react';
import Banner from './Banner';
import Category from './Category/Category';
import PopularMenu from './PopularMenu';
import Review from './Review/Review';

const Home = () => {
    return (
        <>
            <Banner/>
            <Category/>
            <PopularMenu/>
            <Review/>
        </>
    );
};

export default Home;