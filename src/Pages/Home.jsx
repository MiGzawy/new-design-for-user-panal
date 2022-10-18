import React from 'react';
import Announcement from '../Components/Announcement/Announcement';
import Navbar from '../Components/Navbar/Navbar';
import Slider from '../Components/Slider/Slider';
import Catogery from '../Components/Catogries/Catogery'
import Products from '../Components/Products/Products';
import Newsletter from '../Components/Newsletter/Newsletter';
import Footer from '../Components/Footer/Footer';
const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Catogery/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    );
}

export default Home;
