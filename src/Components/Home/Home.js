import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <h2>this is home page</h2>
            <Banner></Banner>
            <Products></Products>
            <Contact></Contact>
        </div>
    );
};

export default Home;