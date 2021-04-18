import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import DeleteService from '../Dashboard/DeleteService/DeleteService';
import Navbar from '../Home/Navbar/Navbar';

const OrderDetails = () => {



    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    console.log(events);

    return (
        <div className="">
            <Navbar></Navbar>
            {/* <Header></Header> */}
            <div className="row ms-5">
                
                <div className="col-md-6 d-flex">
                    {
                        events.length === 0 &&
                        <div style={{ marginLeft: '50%' }} class="spinner-border text-primary justify-content-center" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    }


                    
                    {
                        events.map(event => <DeleteService event={event}></DeleteService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;