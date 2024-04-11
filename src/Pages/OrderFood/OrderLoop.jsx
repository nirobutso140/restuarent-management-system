import React from 'react';
import FoodCard from '../../components/FoodCard';

const OrderLoop = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10 mb-20'>
            {
                items.map(item => <FoodCard item={item} key={item._id} />)
            }
        </div>
    );
};

export default OrderLoop;