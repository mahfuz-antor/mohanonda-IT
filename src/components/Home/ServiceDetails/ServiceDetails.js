import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '50px'}} src={service.img} alt=""/>
            <h5 className="mt-4 mb-2">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quo?</p>
        </div>
    );
};

export default ServiceDetails;