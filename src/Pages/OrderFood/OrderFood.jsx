
import React, { useState } from 'react';

import img from '../../assets/menu_cover_img/menu2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuCover from '../../components/MenuCover';
import './OrderFood.css'
import useMenu from '../../Hooks/useMenu';
import FoodCard from '../../components/FoodCard';
import OrderLoop from './OrderLoop';

const OrderFood = () => {
    const [menu] = useMenu()
    const [tab, setTab] = useState(0)

    const salad = menu.filter(item => item.category === 'salad')
    const drink = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    return (
        <div>
            <MenuCover title={"OUR SHOP"} img={img} />
            <Tabs defaultIndex={tab} onSelect={(index) => setTab(index)}>
                <TabList>
                    <Tab>salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>drinks</Tab>
                    <Tab>dessert</Tab>
                </TabList>
                <TabPanel>
                    <OrderLoop items={salad} />
                </TabPanel>
                <TabPanel>
                    <OrderLoop items={drink} />
                </TabPanel>
                <TabPanel>
                    <OrderLoop items={dessert} />
                </TabPanel>
                <TabPanel>
                    <OrderLoop items={soup} />
                </TabPanel>
                <TabPanel>
                    <OrderLoop items={pizza} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OrderFood;



