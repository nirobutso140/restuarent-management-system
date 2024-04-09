import React from 'react';
import Menu from '../../components/Menu';


const MenuCategory = ({items}) => {
    return (
        <>
            
             <div className='grid gap-4 md:grid-cols-2 my-20'>
               {
                 items.map(item => <Menu items={item} key={item._id}/>)
               }
           </div>
        </>
    );
};

export default MenuCategory;