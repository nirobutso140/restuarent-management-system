import React from 'react';

const Section_title = ({heading, subheading}) => {
    return (
        <div className='text-center my-20'>
            <p className='text-amber-500'>{subheading}</p>
            <h3 className='text-2xl'>{heading}</h3>
        </div>
    );
};

export default Section_title;