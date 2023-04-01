import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

import React from 'react';

const OrderDetails = ({order}) => {

    console.log(order);
    return (
        <div>
            <h2>Order Details</h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Restaurant</th>
                    <th scope="col">Dish</th>
                    <th scope="col">Quantity</th>
                </tr>
                </thead>
                <tbody>
                {order.items.map(el=>
                    <tr>
                        <td>{el.restaurant}</td>
                        <td>{el.dish}</td>
                        <td>{el.quantity}</td>
                    </tr>
                )}

                </tbody>
            </table>
            <tfoot>
            <tr>
                <td>Total Price:</td>
                <td>${order.totalPrice}</td>
            </tr>
            </tfoot>
            <h5>Shipping Details</h5>
            <p>Delivery Address : 2747 Del Medio ct. apt 109 Mountain View CA 94040</p>
            <h5>Payment Details</h5>
            <p>Master Card : *7890</p>
        </div>
    );
};

export default OrderDetails;
