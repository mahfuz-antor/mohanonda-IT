import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-3 text-center m-4 p-5  bg-light">
            <img className="rounded-circle" style={{height: '150px', width:'150px'}} src={service.img} alt=""/>
            <h5 className="mt-4 mb-2">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quo?</p>
            <button className="btn btn-info"> Get Started</button>
        </div>
    );
};

export default ServiceDetails;