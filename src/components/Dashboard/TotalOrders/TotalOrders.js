import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
import ManageTotalOrders from '../ManageTotalOrders/ManageTotalOrders';

const TotalOrders = () => {

    const [totalOrders, setTotalOrders] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // const handleViewOrders = data => {
    //     setTotalOrders(data);
    // }

    // useEffect(() => {
    //     fetch('https://protected-wildwood-79219.herokuapp.com/totalOrders')
    //         .then(res => res.json())
    //         .then(data => setTotalOrders(data))
    // }, [])

    useEffect(() => {
        fetch(`https://protected-wildwood-79219.herokuapp.com/totalOrders`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({  email: loggedInUser.email })
        })
            .then(res=>res.json())
            .then(data => setTotalOrders(data))
    }, [])

    // console.log(loggedInUser);
    console.log(totalOrders);

    return (
        <div className="">
            <Navbar></Navbar>
            <div className="ms-3">
                <Link className="text-info" to="/addService">Add Product</Link><br />
                <Link className="text-info" to="/addReview">Add Review</Link><br />
                <Link className="text-info" to="/dashboard">Manage Product</Link><br />
                <Link className="text-info" to="/orderDetails">Orders Details</Link><br />
            </div>


            <div className="row ms-2 d-flex justify-content-end bg-light">
                {/* <div className="col-md-2"><button className="btn btn-primary" onClick={handleViewOrders}>click to view</button></div> */}
                <div className="col-md-2">Name</div>
                <div className="col-md-2">Email</div>
                <div className="col-md-2">Service</div>
                <div className="col-md-2">PayWith</div>
                <div className="col-md-2">Status</div>
            </div>

            {
                totalOrders.map(total => <ManageTotalOrders total={total}></ManageTotalOrders>)
            }
            {/* <ManageTotalOrders></ManageTotalOrders> */}
        </div>
    );
};

export default TotalOrders;