import React from 'react';
import company from '../../../images/company.jpg'

const CompanyDetails = () => {
    return (
        <section style={{height:'400px'}} className="row d-flex align-items-center mt-3 mb-5">
            <h2 className="text-center">About Our Company</h2>
             <div className="col-md-5 offset-md-1">
                <img src={company} alt=""  className="img-fluid"/>
            </div>

            <div className="col-md-4 offset-md-1">
                <h2 style={{color: ''}}>You can easily find our services here</h2>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos obcaecati incidunt! Labore, at ducimus?</p>
                <h6>&#10004; Quick Response</h6>
                <h6>&#10004; Best Quality</h6>
                <h6>&#10004; 24 hours Services</h6>
                <button className="btn btn-info">Get Started</button>

            </div>
           
        </section>
    );
};

export default CompanyDetails;