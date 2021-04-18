import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar d-flex  navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand ms-5  text-info" href="/home"><h4>Mohanonda IT</h4></a>

                <button className="navbar-toggler bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active me-5 text-info" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5 text-info" aria-current="page" to="/addService">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5 text-info" aria-current="page" to="/viewOrder/:id">Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5 text-info" aria-current="page" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5 text-info" aria-current="page" to="/">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5 text-info" aria-current="page" to="/">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;