import React,  { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './button';
import  { Link } from 'react-router-dom';

export default  class Modal extends Component{
    render() {
        return(
            <ProductConsumer>
                {(value)=>{
                    const {modalOpen, closeModal } =value;
                    const {image,name,price}=value.modalProduct;
                    if (!modalOpen){
                        return null;
                    } else{
                        return(
                        <ModalContainer>
                            <div className="container"> 
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-4">
                                        <h5>Item added to the cart</h5>
                                        <img src={image} className="img-fluid rounded-circle" alt="ProductImage" />
                                        <h5>{name}</h5>
                                        <h5 className="text-muted">Price: ${price}</h5>
                                        <Link to = "/detail">
                                            <ButtonContainer onClick ={()=>closeModal()}>
                                                ContinueShopping
                                            </ButtonContainer>
                                        </Link>
                                        <Link to = "/cart">
                                            <ButtonContainer cart onClick ={()=>closeModal()}>
                                                GoToCart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        )
                    }
                }
                 }
            </ProductConsumer>
        )
    }
}

const ModalContainer =styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;

    #modal{
        background: white;
    }

`