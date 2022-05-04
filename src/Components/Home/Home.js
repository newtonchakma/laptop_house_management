import React from 'react';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <h2>this is home page</h2>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
        </div>
    );
};

export default Home;