import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';
import ViewOrder from '../ViewOrder/ViewOrder';

const ProcessPayment = () => {
    const stripePromise = loadStripe('pk_test_51IeLSbGh5IfzjF1uWkoVlXZPvoZVZlGT2wAlid5d0fb6YmhHxwWNLsjfSb9pWFjPulSYzVJ6YKptXfkJKAiK8Cgn00HYyapLK0');
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;