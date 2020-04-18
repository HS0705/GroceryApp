import React, { Component } from 'react';


export default class EmptyCart extends Component {
    render() {
        return(
            <div className="conatiner mt-5">
                <div className="row">
                    <div className="col-10 mx-auot text-center text-title">
                        <h1>Your Cart is Empty</h1>
                    </div>
                </div>
            </div>
        )
    }
}