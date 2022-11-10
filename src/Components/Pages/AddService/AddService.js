import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service');

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL;
        const price = form.price.value;
        const description = form.description.value;
        console.log(name, photoURL, price, description);

        const service = {
            name: name,
            price: price,
            img: photoURL,
            description: description
        }

        fetch('https://service-assignment-server-liart.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Add Service Successfully');
                    form.reset();
                }
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <h2 className='text-3xl font-bold m-4'>Add service</h2>
            <form onSubmit={handleAddService}>
                <div className='grid grid-cols-1 gap-4'>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered w-full " />
                    <input type="text" name='photoUrl' placeholder="Photo URL" className="input input-bordered w-full " />
                    <input type="text" name='price' placeholder="Price" className="input input-bordered w-full " />
                    <textarea name='description' className="textarea textarea-bordered h-24 w-full my-5" placeholder="Description"></textarea>
                    <input className='btn btn-outline btn-primary text-center mb-4' type="submit" value="Add Service" />
                </div>
            </form>
        </div>
    );
};

export default AddService;