import React from 'react';
import philps from '../../../images/Ellipse 1.png';
import angel from '../../../images/Ellipse 2.png';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';

const testimonials = [
    {
        name: 'Philps',
        company: 'Monpal',
        img: philps,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos obcaecati incidunt! Labore, at ducimus?'
    },
    {
        name: 'Angel',
        company: 'Monpal',
        img: angel,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos obcaecati incidunt! Labore, at ducimus?'
    },
    {
        name: 'Philps',
        company: 'Monpal',
        img: philps,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos obcaecati incidunt! Labore, at ducimus?'
    }
]

const Testimonials = () => {
    return (
        <div className="row d-flex justify-content-center mt-5 mb-5">
            <h2 className="text-center">This is Testimonials Field</h2>
                {
                    testimonials.map(testimonial => <TestimonialDetails testimonial={testimonial}></TestimonialDetails>)
                }


        </div>
    );
};

export default Testimonials;