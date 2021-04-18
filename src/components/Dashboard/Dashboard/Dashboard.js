import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Home/Navbar/Navbar';
import { UserContext } from '../../../App';

const Dashboard = () => {

    const [detail, setDetail] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    // console.log(loggedInUser);
    console.log(isAdmin);


    useEffect(() => {
        fetch('http://localhost:5000/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setDetail(data))

    }, [])

    // console.log(ORV);
    console.log(detail);
    console.log(setLoggedInUser);

    return (

        <div classNameName="container">
            <Navbar></Navbar>

            <div className="row mt-4">
                <div className="col-sm-4">
                    <div style={{ marginLeft: '100px' }} className="card">
                        <div style={{ height: '700px' }} className="card-body bg-info text-white">
                            <h2 className="card-title">Mohanonda IT</h2>
                            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}


                            <Link className="text-white" to="/addReview">Add Review</Link><br />
                            <Link className="text-white" to="/dashboard">Your Orders</Link><br />
                            {isAdmin && <div>
                                <Link className="text-white" to="/addService">Add Product</Link><br />
                                <Link className="text-white" to="/totalOrders">Total Orders</Link><br />
                                <Link className="text-white" to="/orderDetails">Management</Link><br />
                                <Link className="text-white" to="/addAdmin">Add Admin</Link><br />
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div style={{ width: '800px' }} className="card">
                        <h3>You have ordered: {detail.length} Services</h3>
                        <div className="card-body">

                            {
                                detail.map(order => <div className="m-2 bg-info p-2" > <img style={{ width: '50px', borderRadius: '50px' }} src={order?.service.imageURL} alt="" /> <h5> Service: {order?.service?.name} </h5>  <h6>  Email: {order.email} </h6> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum repellat dolorem temporibus. Alias, quas optio.</p>  </div>)
                            }

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;