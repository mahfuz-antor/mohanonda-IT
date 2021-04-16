import React from 'react';

const TestimonialDetails = ({ testimonial }) => {
    return (

        <div className="col-md-3 card text-center m-4 p-5  bg-light shadow">

            <div>
                <div className="card-body">
                <p>{testimonial.description}</p>
                </div>
                <div className="card-footer d-flex  align-items-center">
                    <img className="mx-3" src={testimonial.img} alt="" width="60" />
                    <div>
                        <h3>{testimonial.name}</h3>
                        <h5>CEO: {testimonial.company}</h5>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default TestimonialDetails;