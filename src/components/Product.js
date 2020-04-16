import React, {Component} from 'react';
import styled  from 'styled-components';
import  {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import  PropTypes from 'prop-types';

export default class Product extends Component{

    render() {
        const {id,title,img,price,inCart} = this.props.product;
        return(
            <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
                <div className="card">
                    <div className="img-container p-4" onClick={()=>{console.log("Click Image")}}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"></img>
                        </Link>
                        <button className="cart-btn" disabled={inCart?true: false} onClick={()=>{console.log('Added to the cart')}} >
                        {inCart?(<p className="text-capitalize mb-0" disabled>
                            {" "}
                            in cart
                        </p>) :(
                            <i className="fas fa-cart-plus" />
                        )
                        }
                        </button>
                    </div>
                    <div className="card-footer text-muted">
                       <p>{title}</p>
                    </div>
                </div>
            </ProductWrapper>
        )
        
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool

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