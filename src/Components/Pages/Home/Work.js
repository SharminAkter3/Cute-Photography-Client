import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
    return (
        <div>
            <div>
                <div className="card my-20 p-10 w-full h-98 bg-base-200 shadow-xlrounded-xl">
                    <div>
                        <div className='text-center my-5'>
                            <h2 className='text-5xl font-bold mb-5'>Recent Works</h2>
                            <p className='text-2xl mb-10'>Use this section to find a recent wedding gallery.
                                Want to learn more about <br />  Cute Photography packages, please <button className="btn btn-link text-2xl">Contact Us</button></p>
                        </div>
                    </div>
                    <div className=' grid grid-cols-3 gap-5 '>
                        <figure><img className='rounded-xl w-full h-full' src="https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/928/231/new_medium/tanviandco2.jpg?1561023416" alt="Shoes" /></figure>
                        <figure><img className='rounded-xl w-full h-full' src="https://www.getyourvenue.com/uploads/allied-service/54/service-main1.jpg" alt="Shoes" /></figure>
                        <figure><img className='rounded-xl w-full h-full' src="https://i.pinimg.com/originals/f1/00/e2/f100e27841fb4af6aab49bece5335deb.jpg" alt="Shoes" /></figure>
                        <figure><img className='rounded-xl w-full h-full' src="https://images.shaadisaga.com/shaadisaga_production/photos/pictures/003/161/034/new_medium/202662599_1074946442911169_4078052951135507385_n.jpg?1641568533" alt="Shoes" /></figure>
                        <figure><img className='rounded-xl w-full h-full' src="https://s3.us-west-2.amazonaws.com/images.herecomestheguide.com/images/articles/_1200x630_crop_center-center_82_none/90DayWeddingPlanningChecklist.jpg?mtime=1573002351" alt="Shoes" /></figure>
                        <figure><img className='rounded-xl w-full h-full' src="https://weddingaffair.co.in/wp-content/uploads/2021/10/986cb85525d23ccee3ac576272f3fb87.jpg" alt="Shoes" /></figure>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Work;