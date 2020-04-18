import React,{ Component } from 'react';
import styled  from 'styled-components';
import  { Link } from 'react-router-dom';
import {ProductConsumer} from '../context';
import  PropTypes from 'prop-types';
import { ButtonContainer } from './button'; 

export default class Detail extends Component{
  
    render(){
        return(             
                <ProductWrapper className="container-fluid">
                    <div className="back-btn">
                        <Link to="/">
                            <ButtonContainer>Back to Products</ButtonContainer>
                        </Link>
                    </div>
                    <div className="row">    
                        <ProductConsumer>         
                            { value => {
                                const list = value.subProducts;
                                return (
                                    list.map((i, index) => (
                                        <div className="col-md-4" key={index}>
                                            <div className="card-columns p-5" >
                                            <div className="card">
                                                <div className="img-container p-3">
                                                    <img src={i.image} alt="product" className="card-img-top"></img>
                                                </div>         
                                                <ButtonContainer cart
                                                    disabled={i.inCart ? true : false}
                                                    onClick= {()=>{
                                                        value.addToCart(i.subid);
                                                        value.openModal(i.subid);
                                                    }}>
                                                        AddToCart
                                                </ButtonContainer>         
                                                <div className="card-footer p-4 d-flex justify-content-between">
                                                    <p className="text-capitalize font-weight-bold ">{i.info}</p>
                                                    <span className="text-capitalize font-weight-bold mr-1">${i.price}</span>
                                                </div>
                                            </div>
                                            </div> 
                                        </div>
                                            ))
                                        )     
                                    }}            
                        </ProductConsumer>
                    </div>
                </ProductWrapper>
        );
    }
}

Detail.propTypes = {
    detail:PropTypes.shape({
        subid:PropTypes.string,
        image:PropTypes.string,
        name:PropTypes.string,
        info:PropTypes.string,
        price:PropTypes.number,
    }).isRequired
};
 const ProductWrapper= styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
    width:350px;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 1s linear;
}
&:hover{
    .card{
        border:0.1rem solid green;
        box-shadow:2px 2px 5px rgba(76,175,80,0.3);
    }
    .card-footer{
        background:rgba(76,175,80,0.3);
        border-top:grey;
    }
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition:all 1s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.3rems 0.3rems;
    border:none;
    color:blue ;
    font-size:1.4rem;
    border-radius:0.5rem 0.5rem 0 0 ;
    transform:translate(100%, 100%);
    transition:all 1s linear;
}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}
`;
