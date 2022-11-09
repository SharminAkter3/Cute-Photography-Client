import React from 'react';

const AddService = () => {
    return (
        <div>
            <h2>Add service</h2>
            <form>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
            </form>
        </div>
    );
};

export default AddService;