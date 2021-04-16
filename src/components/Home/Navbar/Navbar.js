import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar d-flex flex-row-reverse navbar-expand-lg navbar-light">
            <div className="">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link me-5 text-info active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5 text-info" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5 text-info" href="#">Dental Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5 text-info" href="#" tabindex="-1" aria-disabled="true">Review</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5 text-info" href="#" tabindex="-1" aria-disabled="true">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5 text-info" href="#" tabindex="-1" aria-disabled="true">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;