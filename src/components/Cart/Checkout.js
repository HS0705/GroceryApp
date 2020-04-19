import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default class Checkout extends Component{

    onToken = (token,addresses) => {
    // const url="https://api.stripe.com/v1/";
    // fetch(url, {
    //   method: "POST",
    }
      // .then(res => {
      //   console.log("response received");
      //   return res.json();
      // })
      // .then(result => {
      //   console.log(result);
      // })
      // .catch(error => {
      //   console.log("error");
      // });
  render() {
    return (
      <StripeCheckout
        description="Grocery Product"
        stripeKey={process.env.REACT_APP_PUBLISH_KEY}
        token={this.onToken}
        panelLabel="PAY"
      />
    )
}}