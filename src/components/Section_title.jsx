import React from 'react';

const Section_title = ({heading, subheading}) => {
    return (
        <div className='text-center mt-20'>
            <p className='text-amber-500'>{subheading}</p>
            <h3 className='text-2xl uppercase'>{heading}</h3>
        </div>
    );
};

export default Section_title;