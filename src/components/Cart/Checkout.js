import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default class Checkout extends Component {
  
    onToken = (token,addresses) => {
      const url="https://api.stripe.com/v1/"
      fetch(url,{
        method:'POST',
      }).then((data)=> {  
        console.log('Request success: ', data);  
        this.props.clearCart();
        this.props.history.push('/');
      })  
      .catch((error)=> {  
        console.log('Request failure: ', error);  
      })
  }
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