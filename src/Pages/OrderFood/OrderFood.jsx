
import React, { useState } from 'react';
import img from '../../assets/menu_cover_img/menu2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuCover from '../../components/MenuCover';
import './OrderFood.css'

const OrderFood = () => {
    const [tab, setTab] = useState(0)
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
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default OrderFood;



