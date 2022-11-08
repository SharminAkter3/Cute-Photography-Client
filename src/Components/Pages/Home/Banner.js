import React from 'react';

const Banner = () => {
    return (
        <div className='rounded-xl'>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full ">
                    <img src="https://images.hindustantimes.com/img/2021/08/19/1600x900/patrick-dozkVhDyvhQ-unsplash_1628163163817_1629346849962.jpg" alt='' className="w-full h-4/5 p-5 rounded-xl" />
                    <div className="absolute transform -translate-y-1/2 top-1/2">
                        <p className='text-5xl mx-10 p-10 font-medium'>Welcome To My <small className='text-5xl font-bold'>Cute<br />Photography</small> Website</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;