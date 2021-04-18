import React, { useEffect, useState } from 'react';
import seo from '../../../images/seo.jpg';
import graphics from '../../../images/graphics.jpg';
import web from '../../../images/web-design.jpg';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Service.css';
import Navbar from '../Navbar/Navbar';

// const serviceData = [
//     {
//         name: 'Graphic Design',
//         img: graphics
//     },
//     {
//         name: 'Web Design',
//         img: web
//     },
//     {
//         name: 'SEO Marketing',
//         img: seo
//     }
// ]



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
            <h3 className="pt-5" style={{color:'#1CC7C1'}}>OUR SERVICES</h3>
            <h1 className="text-white mt-5">Services We Provide</h1>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    events.map(service => <ServiceDetails service={service}></ServiceDetails>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;