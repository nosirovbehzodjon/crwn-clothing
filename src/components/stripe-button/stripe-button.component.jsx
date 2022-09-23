import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51KfxUlCfCCaZBB6S0R6SidhwHku5qVlgpJD59WKUBGaI3x54CIS7R8HAsVgC2luLFNtqb0Mbh062IqQ9uqSctXkw00880BJ308';

    const onToken=token=>{
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout
            label="Pay now"
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;