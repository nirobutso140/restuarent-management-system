import React from 'react';
import Banner from './Banner';
import Category from './Category/Category';
import PopularMenu from './PopularMenu';

const Home = () => {
    return (
        <>
            <Banner/>
            <Category/>
            <PopularMenu/>
        </>
    );
};

export default Home;