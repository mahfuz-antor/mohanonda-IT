import React from 'react';
import Navbar from '../Navbar/Navbar';

const TestimonialDetails = ({ testimonial }) => {
    return (

        <div className="col-md-3 card text-center m-4 p-5  bg-light shadow">
            {/* <Navbar></Navbar> */}

            <div>
                <div className="card-body">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ducimus qui totam libero perferendis aut.</p>
                </div>
                <div className="card-footer d-flex  align-items-center">
                    <img className="mx-3 rounded-circle" src={testimonial.imageURL} alt="" width="50" />
                    <div>
                        <h5>{testimonial.name}</h5>
                        <p>CEO: {testimonial.price}</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default TestimonialDetails;