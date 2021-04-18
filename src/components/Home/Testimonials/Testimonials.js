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
            <h2 className="text-center bg-info p-3 text-white"> Our Services Review Here </h2>
                {
                    events.map(testimonial => <TestimonialDetails testimonial={testimonial}></TestimonialDetails>)
                }


        </div>
    );
};

export default Testimonials;