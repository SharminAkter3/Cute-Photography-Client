import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';


const UpdateUser = () => {
    // const { user } = useContext(AuthContext);
    const storeUser = useLoaderData();

    const [user, setUser] = useState(storeUser);

    // update review to database 
    const handleUpdate = event => {
        // event.preventDefault();
        console.log(user)

        fetch(`https://service-assignment-server-liart.vercel.app/reviews/${storeUser._id}`, {
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

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = [...user]
        newUser[field] = value;
        setUser(newUser);
    }


    return (


        <div>
            <h2> Please Update User:</h2>
            <form onSubmit={handleUpdate()}>
                <div className='grid grid-cols-1 gap-4'>
                    <input onChange={handleInputChange} type="text" defaultValue={storeUser.Reviewer} name='name' placeholder=" First Name" className="input input-bordered w-full " />
                    <input onChange={handleInputChange} type="text" name='name' placeholder="Last Name" className="input input-bordered w-full " />
                    <input onChange={handleInputChange} type="email" defaultValue={storeUser.email} name='email' placeholder="Email" className="input input-bordered w-full " />
                    <input className='btn btn-outline btn-primary text-center mb-4' type="submit" value="Update User" />
                </div>
            </form>

        </div>
    );
};

export default UpdateUser;