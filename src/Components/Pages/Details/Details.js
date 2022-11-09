import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Details = () => {
    const { _id, name, img, price, description } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const reviewerName = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const photoURL = user?.photoURL || 'unregistered';
        const comment = form.comment.value;

        const review = {
            serviceId: _id,
            serviceName: name,
            price: price,
            Reviwer: reviewerName,
            email,
            photoURL,
            comment
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review order successfully');
                    form.reset();

                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div className=''>
            <div>
                <h1 className='text-3xl font-bold m-4'>Service Details: </h1>
                <div className="card card-compact w-50 bg-base-100 shadow-xl">
                    <figure><img className='w-96 h-96 rounded-md' src={img} alt="Shoes" /></figure>
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
            <div className='bg-base-100 shadow-2xl p-10 my-10 w-full rounded-lg'>
                <h1 className='text-3xl font-bold'>Review:</h1>
                {
                    user?.uid ?
                        <>
                            <form onSubmit={handleReview}>
                                <h4 className='text-2xl m-3'>Service Name : {name}</h4>
                                <h4 className='text-2xl m-3'>Price : ${price}</h4>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />
                                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                                    <input name='phone' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                                    <input name='email' type="text" placeholder="Photo URL" defaultValue={user?.photoURL} className="input input-bordered w-full" />
                                </div>
                                <textarea name='comment' className="textarea textarea-bordered h-24 w-full my-5" placeholder="Comment"></textarea>
                                <input className='btn btn-outline btn-primary text-center mb-4' type="submit" value="Add Review" />
                            </form>
                        </>
                        :
                        <p className='text-2xl font-bold'>Please <Link className='text-primary' to='/login'>Login</Link> to add a review</p>
                }
            </div>
        </div >
    );
};

export default Details;