import React, { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails';

const Details = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <h1>Service Details</h1>
                {
                    services.map(details => <ServiceDetails
                        key={details._id}
                        details={details}
                    ></ServiceDetails>
                    )
                }
            </div>
            <div>
                <h1>Review Section</h1>
            </div>
        </div >
    );
};

export default Details;