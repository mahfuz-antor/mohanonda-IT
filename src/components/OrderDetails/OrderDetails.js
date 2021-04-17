import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const OrderDetails = () => {
    

    const [detail, setDetail] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    useEffect(() => {
        fetch('http://localhost:5000/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setDetail(data))

    }, [])

    console.log(detail);
    console.log(setLoggedInUser);

    return (
        <div className="container">
            {/* <Header></Header> */}
            <div className="row">
                <h3>You have ordered: {detail.length} Services</h3>
            <div className="col-md-6 d-flex">
            {
                detail.length === 0 &&
                <div style={{marginLeft:'50%'}} class="spinner-border text-primary justify-content-center" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            }
            
            
            {
                detail.map(order => <div className="m-2 bg-info p-2" > <img style={{width:'50px', borderRadius:'50px'}} src={order?.service.imageURL} alt=""/> <h5> Service: {order?.service?.name} </h5>  <h6>  Email: {order.email} </h6> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum repellat dolorem temporibus. Alias, quas optio.</p>  </div> )
            }
            </div>
            </div>
        </div>
    );
};

export default OrderDetails;