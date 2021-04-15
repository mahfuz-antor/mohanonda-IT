import React from 'react';
import company from '../../../images/company.jpg'

const CompanyDetails = () => {
    return (
        <section style={{height:'400px'}} className="row d-flex align-items-center">
            <h2 className="text-center">About Our Company</h2>
             <div className="col-md-5 offset-md-1">
                <img src={company} alt=""  className="img-fluid"/>
            </div>

            <div className="col-md-4 offset-md-1">
                <h2 style={{color: ''}}>You can easily find your service here</h2>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos obcaecati incidunt! Labore, at ducimus?</p>
                <h6>&#10004; Fast response</h6>
                <h6>&#10004; Fast response</h6>
                <h6>&#10004; Fast response</h6>
                <button className="btn btn-primary">Get Started</button>

            </div>
           
        </section>
    );
};

export default CompanyDetails;