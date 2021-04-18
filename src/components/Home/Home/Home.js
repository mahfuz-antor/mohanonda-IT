import React from 'react';
import Blogs from '../Blogs/Blogs';
import CompanyDetails from '../CompanyDetails/CompanyDetails';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CompanyDetails></CompanyDetails>
            <Services></Services>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;