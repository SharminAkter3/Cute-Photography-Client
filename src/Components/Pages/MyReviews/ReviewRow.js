import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const ReviewRow = ({ review, handleDelete, handleUpdate }) => {
    const { user } = useContext(AuthContext);

    const { _id, serviceName, Reviwer, price, email, status } = review;

    return (
        <tr>
            <th>
                {
                    user?.photoURL ?
                        <img src={user?.photoURL} alt="" />
                        :
                        <img className='w-24 h-24' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt=''></img>
                }
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
                <Link to={`/updateUser/${_id}`}>
                    <button className="btn btn-outline w-30 ">Edit</button>
                </Link>
            </th>
        </tr>
    );
};

export default ReviewRow;