import React, { useState } from 'react';
import Select from 'react-dropdown-select';
import OrderDetails from '../../OrderDetails/OrderDetails';


const options = [
    { label: 'Pending', value: 'Pending' },
    { label: 'OnGoing', value: 'OnGoing' },
    { label: 'Done', value: 'Done' }
]

const ManageTotalOrders = ({ total }) => {

    const [orderValue, setOrderValue] = useState()

    console.log(orderValue);



    return (
        <div>
            <div className="row me-3 d-flex justify-content-end">
                <div className="col-md-2"> {total?.name}</div>
                <div className="col-md-2">{total?.email}</div>
                <div className="col-md-2">{total?.service?.name}</div>
                <div className="col-md-2"> Credit Card </div>
                <div className="col-md-2"><Select
                    options={options}
                    values={[]}
                    onChange={(value) =>  setOrderValue(value)}
                />
                </div>

            </div>

        </div>
    );
};

export default ManageTotalOrders;