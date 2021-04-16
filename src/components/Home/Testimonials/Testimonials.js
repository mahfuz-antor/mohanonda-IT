import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';




const Testimonials = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/testimonial')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div className="row d-flex justify-content-center mt-5 mb-5">
            {/* <Navbar></Navbar> */}
            <h2 className="text-center">This is Testimonials Field</h2>
                {
                    events.map(testimonial => <TestimonialDetails testimonial={testimonial}></TestimonialDetails>)
                }


        </div>
    );
};

export default Testimonials;