import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <>
            <Carousel>
                <div>
                    <img src="src/assets/Home_img/01.jpg" />
                </div>
                <div>
                    <img src="src/assets/Home_img/02.jpg" />            
                </div>
                <div>
                    <img src="src/assets/Home_img/03.png" />
                </div>
                <div>
                    <img src="src/assets/Home_img/04.jpg" />
                </div>
                <div>
                    <img src="src/assets/Home_img/05.png" />
                </div>
                <div>
                    <img src="src/assets/Home_img/06.png" />
                </div>
            </Carousel>
        </>
    );
};

export default Banner;