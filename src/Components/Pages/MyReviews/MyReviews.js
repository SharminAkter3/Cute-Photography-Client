import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import ReviewRow from './ReviewRow';

const MyReviews = () => {
    const { user } = useContext(AuthContext);

    const [reviews, setRivews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setRivews(data)
            })
    }, [user?.email])

    return (
        <div>
            <h2 className="text-4xl"> You have {reviews.length} reviews</h2>

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
                            ></ReviewRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;