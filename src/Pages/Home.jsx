import React from 'react';
import Announcement from '../Components/Announcement/Announcement';
import Navbar from '../Components/Navbar/Navbar';
import Slider from '../Components/Slider/Slider';
import Catogery from '../Components/Catogries/Catogery'
const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Catogery/>
        </div>
    );
}

export default Home;
