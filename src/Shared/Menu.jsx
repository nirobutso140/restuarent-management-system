import React from 'react';

const Menu = ({items}) => {
    const {name, recipe, image, price} = items
    return (
        <>
            <div className='flex space-x-4 items-start'>
                <img className='w-24 h-24 rounded-full' src={image} alt="" />
                <div className="menu_article">
                    <h3 className='uppercase text-lg'>{name} -------------</h3>
                    <p style={{flexWrap: 'wrap', color: 'gray'}}>{recipe}</p>
                </div>
                <h3 className='text-amber-500'>${price}</h3>
            </div>
        </>
    );
};

export default Menu;