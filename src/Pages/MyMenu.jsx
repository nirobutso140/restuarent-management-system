import React from 'react';
import MenuCover from '../components/MenuCover';
import img from '../assets/menu_cover_img/menu1.jpg'

const MyMenu = () => {
    return (
        <div>
            <MenuCover title={"OUR MENU"} img={img}/>
        </div>
    );
};

export default MyMenu;