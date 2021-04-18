import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState();

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageURL: imageURL,
            price: data?.price
        };
        const url = `https://protected-wildwood-79219.herokuapp.com/addReview`
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
    const handleImageUpload = event => {
        console.log(event?.target?.files[0]);
        const imageData = new FormData();
        imageData.set('key', '47b2d957da970efd46650889d3040352');
        imageData.append('image', event?.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response?.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div className="">
            <Navbar></Navbar>


            <div className="row m-5">
                <div className="col-sm-3">
                    <div className="card">
                        <div style={{height:'500px'}} className="card-body bg-info text-white">
                            <h2 className="card-title">Fruits Village</h2>
                            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                            <Link className="text-white" to="/dashboard">Your Orders</Link><br />
                            <Link className="text-white" to="/dashboard">Edit Product</Link><br />
                        </div>
                    </div>
                </div>
                <div className="col-md-9 ">
                    <div className="card bg-info shadow">
                        <div className="card-body text-center bg-secondary  m-5 shadow">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h3 className="text-info">Add Your Review Details Here</h3>
                                <input name="name" defaultValue="Client Name" {...register("name")} />
                                <br />
                                <input name="company" defaultValue="Client Company" {...register("price")} />

                                <br />
                                <input type="file" name="exampleRequired" onChange={handleImageUpload} />

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

export default AddReview;