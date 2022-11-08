import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full h-96' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                    <h2 className='text-xl text-blue-800 font-semibold'>Price: ${price}</h2>

                    <div className=''>
                        {
                            description.length > 150 ?
                                <p>{description.slice(0, 150) + '...'}<Link className='text-primary'>read more</Link></p>

                                :
                                <p>{description}</p>
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-primary"> <Link>Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;