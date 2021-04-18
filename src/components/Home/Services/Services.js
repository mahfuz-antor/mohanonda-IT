import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Service.css';


const Services = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://protected-wildwood-79219.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <section className="services-container">
            {/* <Navbar></Navbar> */}
            <div className="text-center">
            <h1 className="p-5 m-2 text-info" style={{color:'#1CC7C1'}}>OUR SERVICES HERE</h1>
            {/* <h1 className="text-white mt-3">Services We Provide</h1> */}
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-3 pt-3 pb-5">
                {
                    events.map(service => <ServiceDetails service={service}></ServiceDetails>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;