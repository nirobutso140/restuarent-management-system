import React, { useEffect, useState } from 'react';
import Section_title from '../components/Section_title';
import Menu from '../Shared/Menu';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
         fetch('menu.json ')
         .then(res => res.json())
         .then(data =>{
            const popularItems = data.filter(item => item.category === "popular")
            setMenu(popularItems)
         })
    }, [])
    return (
        <>
            <Section_title subheading={"--- Propular Menu ---"} heading={"From Our Menu"}/>
           <div className='grid gap-4 md:grid-cols-2'>
               {
                 menu.map(item => <Menu items={item} key={item._id}/>)
               }
           </div>
        </>
    );
};

export default PopularMenu;