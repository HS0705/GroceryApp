import React,{ Component } from 'react';
import styled  from 'styled-components';
import  { Link } from 'react-router-dom';
import {ProductConsumer} from '../context';
import  PropTypes from 'prop-types';
import { ButtonContainer } from './button'; 

export default class Detail extends Component{
  
    render(){
        return(
                    <ProductConsumer>
                        { value => {
                            console.log(value.subProducts);
                            const list = value.subProducts;
                            return (
                                 list.map((i, index) => (
                                    <div key={index}>
                                        <ProductWrapper className='col-10 mx-auto col-md-6 col-lg-3 my-3'>
                                        <div className="card">
                                            <div className="img-container p-4">
                                                <img src={i.image} alt="product" className="card-img-top"></img>
                                            </div>                         
                                            <div className="card-footer text-muted">
                                                <p>{i.info}</p>
                                                <p>${i.price}</p>
                                            </div>
                                        </div>
                                        </ProductWrapper>
                                </div>
                                ))
                )     
                                 }}
                </ProductConsumer>
        );
    }
}

Detail.propTypes = {
    detail:PropTypes.shape({
        subid:PropTypes.string,
        image:PropTypes.string,
        name:PropTypes.string,
    }).isRequired
};
 const ProductWrapper= styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
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
    border-radius:0.5rem 0.5rem 0.5rem 0.5rem ;
    transform:translate(100%, 100%);
    transition:all 1s linear;
}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}
`;
