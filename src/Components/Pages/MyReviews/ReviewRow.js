import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review, handleDelete, handleUpdate }) => {
    const { _id, serviceName, Reviwer, price, email, status } = review;

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
                <button onClick={() => handleUpdate(_id)} className="btn btn-outline w-30 ">{status ? status : 'Edit'}</button>
            </th>
        </tr>
    );
};

export default ReviewRow;