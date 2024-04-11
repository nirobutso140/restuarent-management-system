import React from 'react';

const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className='cardImage relative'>
                <figure><img src={image} alt="Shoes" /></figure>
                <span className='absolute bottom-4 bg-base-100  font-semibold right-6 bg-black text-white p-2 bg-opacity-30'>${price}</span>
            </div>
            <div className="card-body text-left">
                <h2 className="card-title">{name}</h2>
                <p className='text-gray-500'>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;