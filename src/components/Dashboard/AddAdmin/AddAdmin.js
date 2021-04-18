import React, { useState } from 'react';
// import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Navbar from '../Home/Navbar/Navbar';

const AddAdmin = () => {
    const { register, handleSubmit } = useForm();
    // const [imageURL, setImageURL] = useState();

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            email: data?.email
        };
        const url = `http://localhost:5000/addAdmin`
        console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side res', res))
    };


    return (
        <div className="">
            {/* <Navbar></Navbar> */}


            <div className="row m-5">
                <div className="col-sm-3">
                    <div className="card">
                        <div style={{height:'500px'}} className="card-body bg-info text-white">
                            <h2 className="card-title">Fruits Village</h2>
                            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                            <Link className="text-white" to="/dashboard">Manage Product</Link><br />
                            <Link className="text-white" to="/addService">Add Product</Link><br />
                            <Link className="text-white" to="/dashboard">Edit Product</Link><br />
                        </div>
                    </div>
                </div>
                <div className="col-sm-9">
                    <div className="card bg-info">
                        <div className="card-body text-center bg-white  m-5 shadow">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h3>Add Your Service Details Here</h3>
                                <input type="text" name="name" defaultValue="Admin Name" {...register("name")} />
                                <br />
                                <input type="email" name="email" defaultValue="Admin email" {...register("email")} />

                                <br />
                                {/* <input type="file" name="exampleRequired" onChange={handleImageUpload} /> */}

                                <br />
                                <input className="btn btn-primary  text-white" type="submit" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AddAdmin;