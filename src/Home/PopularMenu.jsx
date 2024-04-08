import React, { useEffect, useState } from 'react';
import Section_title from '../components/Section_title';
import Menu from '../Shared/Menu';
import useMenu from '../Hooks/useMenu';

const PopularMenu = () => {
    
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === "popular") 

    return (
        <>
            <Section_title subheading={"--- Propular Menu ---"} heading={"From Our Menu"}/>
           <div className='grid gap-4 md:grid-cols-2'>
               {
                 popular.map(item => <Menu items={item} key={item._id}/>)
               }
           </div>
        </>
    );
};

export default PopularMenu;