import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Jh9OrG7PhjELo2ti1UgZg4CJqGwe1iMLVZb51biVVJPYO1Nj9m2jq0owmdauNMqMtOQQG2gzpmeLNsblEY3pbIk00SO8P26lr';

    const onToken = token => {
        console.log(token);
        alert('Payment Successfull');
    }

    return (
        <StripeCheckout 
            name="CRWN Cloting Ltd."
            label="Pay Now"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;