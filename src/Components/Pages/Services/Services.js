import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services?limit=${3}`)
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div>
            <div className='text-center my-7'>
                <h1 className="text-5xl font-bold"> My Services</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-primary w-50 my-10 px-10"><Link to='/service'>See All</Link></button>
            </div>
        </div>
    );
};

export default Services;