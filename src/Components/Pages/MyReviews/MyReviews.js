import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import toast from 'react-hot-toast';
import ReviewRow from './ReviewRow';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    useTitle('My Reviews')

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://service-assignment-server-liart.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('cute-token')}`
            }
        })
            .then(res => {
                // if (res.status === 401 || res.status === 403) {
                //     return logOut();
                // }
                return res.json()
            })
            .then(data => {
                console.log(data)
                setReviews(data);
            })

    }, [user?.email, logOut]);


    // delete review to database 
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure? You want to cancel this order');
        if (proceed) {
            fetch(`https://service-assignment-server-liart.vercel.app/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Deleted Successfully');
                        const remaining = reviews.filter(rvw => rvw._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }


    // update review to database 
    const handleUpdate = id => {
        // event.preventDefault();

        fetch(`https://service-assignment-server-liart.vercel.app/reviews/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ user })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0)
                    toast.success('Updated User Successfully');
                console.log(data);
            })
    }

    return (
        <div>

            {
                reviews?.length === 0 ?
                    <h2 className="text-4xl text-center m-20">No reviews were added</h2>
                    :
                    <>
                        <h2 className="text-4xl"> You have {reviews.length} reviews </h2>

                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <th>Name</th>
                                        <th>Service Name</th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reviews.map(review => <ReviewRow
                                            key={review._id}
                                            review={review}
                                            handleDelete={handleDelete}
                                            handleUpdate={handleUpdate}
                                        ></ReviewRow>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </>
            }
        </div>
    );
};

export default MyReviews;