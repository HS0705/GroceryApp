import React, { Component } from 'react';
import styled  from 'styled-components';
import  { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import  PropTypes from 'prop-types';

export default class Product extends Component{

    render() {
        const {id,title,img,subCategories} = this.props.product; 
        return(
            <ProductWrapper className="col">
                <div className="card p-2">
                    <ProductConsumer>
                        {value =>(
                            <div className="img-container" onClick={() => 
                                value.handleCategory(id)
                            }>
                            <Link to="/detail" data={title}>
                                <img src={img} alt="product" className="card-img-top rounded"></img>
                            </Link>
                        </div>
                        )
                        }                    
                    </ProductConsumer>
                    <div className="card-footer">
                       <p className="text-center font-weight-bold">{title}</p>
                    </div>
                </div>
            </ProductWrapper>
        )
        
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.string,
        img:PropTypes.string,
        title:PropTypes.string,
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
`;