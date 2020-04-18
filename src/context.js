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
    
    getCategory = (id) =>{
        const product= this.state.products.find((item) => item.id === id).subCategories;
        //console.log(product);
        return product;
    }
    getSubCategory = (subid) =>{
        const product= this.state.subProducts.find((item) => item.subid === subid);
        return product;
    }
    handleCategory = (id) =>{
        const product =this.getCategory(id);
        
        this.setState(()=>{
            return {subProducts: product};
        });
    }
    handlesubCategory = (subid) =>{
        const product =this.getsubCategory(subid);
        
        this.setState(()=>{
            return {subProducts: product};
        });
    }
    addToCart= (subid) =>{
        let tempList=[...this.state.subProducts]
        console.log(tempList);
        const index=tempList.indexOf(this.getSubCategory(subid));
        const product =tempList[index]
        product.inCart= true;
        product.count += 1;
        console.log(product.count);
        const price=product.price;
        product.total=  price * product.count;
    this.setState(()=>{
        return {subProducts:tempList, cart: [this.state.cart, product]};
    });
}
    render() {
        return(
            <ProductContext.Provider value={{...this.state,
            handleCategory: this.handleCategory,
            addToCart:this.addToCart}}>
                {this.props.children}
            </ProductContext.Provider>
        )

    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer };