import React from 'react';
import CompanyDetails from '../CompanyDetails/CompanyDetails';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CompanyDetails></CompanyDetails>
            <Services></Services>
        </div>
    );
};

export default Home;