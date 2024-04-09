import React from 'react';
import MenuCover from '../components/MenuCover';
import Section_title from '../components/Section_title'
import MenuCategory from './MenuCategory/MenuCategory';
import img from '../assets/menu_cover_img/menu1.jpg'
import useMenu from '../Hooks/useMenu';

const MyMenu = () => {
    const [menu] = useMenu()
    const todayOffer = menu.filter(item => item.category === "offered")
    const salad = menu.filter(item => item.category === 'salad')
    const drink = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    return (
        <div>
            <MenuCover title={"our menu"} img={img}/>
            <Section_title heading={"today's offer"} subheading={"--- Don't miss ---"}/>
            <MenuCategory items={todayOffer}/>
            <MenuCover title={"salad"} img={img}/>
            <MenuCategory items={salad}/>
            <MenuCover title={"desserts"} img={img}/>
            <MenuCategory items={dessert}/>
            <MenuCover title={"pizza"} img={img}/>
            <MenuCategory items={pizza}/>
            <MenuCover title={"drinks"} img={img}/>
            <MenuCategory items={drink}/>
            <MenuCover title={"soup"} img={img}/>
            <MenuCategory items={soup}/>
        </div>
    );
};

export default MyMenu;