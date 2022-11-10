import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);
    useTitle('Service')
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div>
            <div>
                <div className='text-center my-10'>
                    <h1 className="text-5xl font-bold"> All Services</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Service;