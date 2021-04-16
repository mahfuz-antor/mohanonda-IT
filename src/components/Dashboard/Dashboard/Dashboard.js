import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import DeleteService from '../DeleteService/DeleteService';
import Navbar from '../../Home/Navbar/Navbar';

const Dashboard = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    console.log(events);

    return (
       
        <div classNameName="container">
            <Navbar></Navbar>

            <div className="row mt-4">
                <div className="col-sm-4">
                    <div style={{ marginLeft: '100px' }} className="card">
                        <div style={{height:'500px'}} className="card-body bg-info text-white">
                            <h2 className="card-title">Fruits Village</h2>
                            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                            
                            <Link className="text-white" to="/addService">Add Product</Link><br />
                            <Link className="text-white" to="/addReview">Add Review</Link><br />
                            <Link className="text-white" to="/dashboard">Manage Product</Link><br />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div style={{ width: '800px' }} className="card">
                        <div className="card-body">

                            {
                                events.map(event => <DeleteService event={event}></DeleteService>)
                            }

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;