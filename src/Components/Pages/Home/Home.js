import React from 'react';
import About from '../About/About';
import Banner from './Banner';
import Work from './Work';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Work></Work>
        </div>
    );
};

export default Home;