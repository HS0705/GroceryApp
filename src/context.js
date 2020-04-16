import React, {Component} from 'react';
import {storeProducts} from './data';

const ProductContext=React.createContext();

class ProductProvider extends Component{
    state={
        products:storeProducts,
        // detailProduct:detailProduct
    }
    addToCart= () =>{
        console.log("Add to cart");
    }
    render() {
        return(
            <ProductContext.Provider value={{...this.state,addToCart:this.addToCart}}>
                {this.props.children}
            </ProductContext.Provider>
        )

    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer };