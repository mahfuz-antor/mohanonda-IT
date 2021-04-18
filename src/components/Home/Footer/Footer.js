import React from 'react';
import './Footer.css';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div style={{backgroundColor: '#171f44'}} className="row  p-5 text-white footer-bg">

            <div className="col-md-3 mt-3">
                <p>H#002(3rd floor), Road#44, <br/> Ranibazar, Tiles Porty, Boalia, Rajshahi, Bangladesh</p>
            </div>
            <div className="col-md-3 mt-3">
                <h2>Company</h2>
                <a className="text-white" href="#">About Us</a> <br/>
                <a className="text-white" href="#">Contact Us</a> <br/>
                <a className="text-white" href="#">Our Services</a> <br/>
                <a className="text-white" href="#">Our Blogs</a> <br/>
            </div>
            <div className="col-md-3 mt-3">
                <h2>Quick Link</h2>
                <a className="text-white" href="#">About Us</a> <br/>
                <a className="text-white" href="#">Contact Us</a> <br/>
                <a className="text-white" href="#">Our Services</a> <br/>
                <a className="text-white" href="#">Our Blogs</a> <br/>
            </div>
            <div className="col-md-3 mt-3 p-2">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quibusdam in ut ab facere exercitationem.</p>
                <a className="text-white me-2" href="#"><img src="" alt=""/><FontAwesomeIcon icon={faFacebook} size="3x" /></a>
                <a className="text-white me-2" href="#"><img src="" alt=""/><FontAwesomeIcon icon={faGoogle} size="3x"/></a>
                <a className="text-white" href="#"><img src="" alt=""/><FontAwesomeIcon icon={faLinkedin}  size="3x"/></a>
            </div>

        </div>

    );
};

export default Footer;