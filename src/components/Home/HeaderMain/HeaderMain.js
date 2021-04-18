import React from 'react';
import header from '../../../images/header.jpg';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1 p-5  me-4 bg-white">
                <h2 className="text-info">Your IT Service  <br/> Search Here</h2>
                <p className="text-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos obcaecati incidunt! Labore, at ducimus?</p>
                <button className="btn btn-info">Get Started</button>

            </div>
            <div className="col-md-6">
                <img src={header} alt=""  className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;