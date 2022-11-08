import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const { name, img, price, description } = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7 p-10'>
            <div>
                <h1 className='text-3xl font-bold m-4'>Service Details </h1>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img className='w-full h-96' src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold">{name}</h2>
                        <h2 className='text-xl text-blue-800 font-semibold'>Price: ${price}</h2>

                        <div className=''>
                            <p>{description}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-primary">Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1>Review Section</h1>
            </div>
        </div >
    );
};

export default Details;