import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-3 text-center m-4 p-3  bg-light text-info rounded shadow">
            {/* <Navbar></Navbar> */}
            <img className="rounded-circle" style={{height: '130px', width:'130px'}} src={service.imageURL} alt=""/>
            <h5 className="mt-3 mb-2">{service.name}</h5>
            <p className="text-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quo?</p>
            <button className="btn btn-info"> <Link className=" text-white" to={"/viewOrder/" + service._id}>Get Service</Link></button>
        </div>
    );
};

export default ServiceDetails;