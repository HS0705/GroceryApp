import React, { Component } from 'react';
import { categories } from './data';

const ProductContext=React.createContext();

class ProductProvider extends Component{
    state={
        products:[],
        subProducts: []
    };
    componentDidMount(){
        this.setProducts();
    }
    setProducts =() =>{
        let tempProducts= [];
        categories.forEach(item =>{
            const eachItem ={...item};
            tempProducts =[...tempProducts,eachItem]
        })
        this.setState(()=>{
            return { products: tempProducts }
        });
    };
    
    getSubCategory = (id) =>{
        const product= this.state.products.find((item) => item.id === id).subCategories;
         
        return product;
    }

    handleSubCategory = (id) =>{
        const product =this.getSubCategory(id);
        
        this.setState(()=>{
            return {subProducts: product}
        });
    }
    addToCart= () =>{
        console.log("Add to cart");
    }
    render() {
        return(
            <ProductContext.Provider value={{...this.state,
            handleSubCategory: this.handleSubCategory,
            addToCart:this.addToCart}}>
                {this.props.children}
            </ProductContext.Provider>
        )

    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer };