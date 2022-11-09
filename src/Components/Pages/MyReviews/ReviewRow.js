import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review }) => {
    const { _id, serviceName, Reviwer, price, email } = review;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure? You want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-semibold">{Reviwer}</div>
                        <div className="text-lg opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-semibold">{serviceName}</div>
            </td>
            <td>
                <div className="font-semibold">${price}</div>
            </td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-outline w-25 mr-5">Delete</button>
                <button className="btn btn-outline w-30 ">Edit</button>
            </th>
        </tr>
    );
};

export default ReviewRow;