import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Services from '../Services/Services';
import Banner from './Banner';
import Work from './Work';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Work></Work>
        </div>
    );
};

export default Home;