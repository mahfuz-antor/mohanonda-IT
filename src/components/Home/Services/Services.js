import React from 'react';
import fluoride from '../../../images/fluride.png';
import cavity from '../../../images/cavity.png';
import white from '../../../images/whitening.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Service.css';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: white
    }
]


const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
            <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
            <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;