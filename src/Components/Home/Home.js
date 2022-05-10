import React from 'react';
import Footer from '../../Sharepages/Footer/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;