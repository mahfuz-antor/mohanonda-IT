import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
// import Header from '../Header/Header';
import { useForm } from 'react-hook-form';
import Navbar from '../Home/Navbar/Navbar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const ViewOrder = () => {
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orderDetails')
            .then(res => res.json())
            .then(data => setDetail(data))

    }, [])


    const { id } = useParams();
    const itService = detail.find(pd => pd._id === id)
    console.log(itService);

    const { handleSubmit } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {
        // const savedCart = getDatabaseCart();
        const orderDetails = { ...loggedInUser, service: itService, shipment: data, orderTime: new Date() };
        console.log(setLoggedInUser);

        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    // processOrder();
                    alert('Your Order Submitted Successfully.')
                }
            })

    };

    return (
        <div className="">
            <Navbar></Navbar>
            {
                detail.length === 0 &&
                <div style={{margin:'0 auto'}} class="spinner-border text-primary d-flex justify-content-center" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            }

            <form className="ship-form m-5 p-2" onSubmit={handleSubmit(onSubmit)}>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Fruit Name:</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{itService?.name}</td>
                            <td> 3 </td>
                            <td> {itService?.price} </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td> <input className="btn btn-primary text-white" type="submit" /> </td>
                        </tr>
                    </tbody>
                </table>
                <input type="text" defaultValue={itService?.name}/> <br/> <br/>
                <input type="text" defaultValue={itService?.price}/> <br/> <br/>
                    <ProcessPayment></ProcessPayment>
            </form>

        </div>
    );
};

export default ViewOrder;