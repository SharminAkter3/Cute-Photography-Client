import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, name, img, price, description } = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                    {/* react-photo-view */}

                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} style={{ objectFit: 'cover' }} className='h-80 w-full object-cover' alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>

                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                    <h2 className='text-xl text-blue-800 font-semibold'>Price: ${price}</h2>

                    <div className=''>
                        {
                            description.length > 100 ?
                                <p>{description.slice(0, 100) + '...'}<Link className='text-primary'>read more</Link></p>

                                :
                                <p>{description}</p>
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-outline btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;