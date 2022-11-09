import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);

    const [reviews, setRivews] = useState({})

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
        </div>
    );
};

export default MyReviews;