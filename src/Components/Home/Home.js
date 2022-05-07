import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <h2>this is home page</h2>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <Contact></Contact>
        </div>
    );
};

export default Home;