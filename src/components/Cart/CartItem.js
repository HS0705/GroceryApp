import React, { Component } from 'react';

export default function CartItem({item,value}) {
    const {subid,image,name,price,total,count} = item;
    const {increaseQuantity,decreaseQuantity,removeItem} = value;
        return(
            <div className="row my-1 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img src={image} style={{width:'10rem',height:'10rem',border:'solid 1 rem black'}} className="img-fluid rounded-circle" alt="Image" />
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">product:</span>
                    {name}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price:</span>
                    {price}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div> 
                            <span className="btn btn-black mx-1" onClick={()=>{decreaseQuantity(subid)}}>
                                -
                            </span>
                            <span className="btn btn-black mx-1">
                                {count}
                            </span>
                            <span className="btn btn-black mx-1" onClick={()=>{increaseQuantity(subid)}}>
                                +
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <div className="cart-icon" onClick={()=>{removeItem(subid)}}>
                        <i className="fas fa-trash"></i>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <strong>item total: $ {total}</strong>
                </div>
            </div>
        )
    }
