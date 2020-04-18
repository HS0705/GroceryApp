import React, { Component } from 'react';
import { categories } from './data';

const ProductContext=React.createContext();

class ProductProvider extends Component{
    state={
        products:[],
        subProducts: [],
        cart: [],
        modalOpen:false,
        modalProduct: [],
        cartSubTotal:0,
        tax:0,
        cartTotal:0,
    };
    componentDidMount(){
        this.setProducts();
    }

    //  Iterate over the categories and set them as products
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
    //Get the subcategories for the category clicked
    getCategory = (id) =>{
        const product= this.state.products.find((item) => item.id === id).subCategories;
        return product;
    }

    //Get the subitem to be added to the cart once clicked
    getSubCategory = (subid) =>{
        const product= this.state.subProducts.find((item) => item.subid === subid);
        return product;
    }

    //set the subproducts in the state with subitems for the category clicked
    handleCategory = (id) =>{
        const product =this.getCategory(id); 
        this.setState(()=>{
            return {subProducts: product};
        });
    }

    //set the subProducts with the subitem clicked
    handlesubCategory = (subid) =>{
        const product =this.getsubCategory(subid);
        
        this.setState(()=>{
            return {subProducts: product};
        });
    }

    //Add the subitems to the shopping cart
    addToCart= (subid) =>{
        let tempList=[...this.state.subProducts]
        const index=tempList.indexOf(this.getSubCategory(subid));
        const product =tempList[index]
        product.inCart= true;
        product.count = 1;
        const price=product.price;
        product.total=  price;
    this.setState(()=>{
        return { subProducts: tempList, cart: [...this.state.cart, product] };
    }, ()=> {
        this.addTotals();
    });
}
//Open the modal for the item selected
openModal = subid =>{
    const product = this.getSubCategory(subid);
    this.setState(()=>{
        return { modalProduct: product, modalOpen:true}
    });
}

////Close the modal
closeModal = () => {
    this.setState(()=>{
        return{ modalOpen:false }
    })
}
//
increaseQuantity = (subid) =>{
    console.log("incremnt method");
}

decreaseQuantity = (subid) =>{
    console.log("decremnt method");
}

removeItem = (subid)=> {
    let tempProducts =[...this.state.subProducts];
    let tempCart = [...this.state.cart];
    tempCart =tempCart.filter(item => item.subid !== subid);
    const index =tempProducts.indexOf(this.getSubCategory(subid));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false ;
    removedProduct.count = 0;
    removedProduct.total = 0 ;
    this.setState(()=>{
        return{ cart: [...tempCart], subProducts: [...tempProducts]}
    },()=>{
        this.addTotals();
    })
}

clearCart = () => {
    let tempSubProducts =[...this.state.subProducts];
    tempSubProducts.forEach(item => {
        const index = tempSubroducts.indexOf(this.getSubCategory(item.subid));
        let clearedProduct = tempProducts[index];
        clearedProduct.inCart = false ;
        clearedProduct.count = 0;
        clearedProduct.total = 0 ;
    });
    this.setState(
        () => {
        return { cart:[],subProducts: tempProducts};
    }, () => {
        this.addTotals();
    }
    );
}
addTotals =()=>{
    let subTotal = 0;
    this.state.cart.map(item =>(subTotal += item.total));
    subTotal=parseFloat(subTotal.toFixed(2));
    const tempTax= subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    let total= subTotal + tax;
    total = parseFloat(total.toFixed(2));
    this.setState(()=>{
        return { cartSubTotal:subTotal, tax:tax, cartTotal:total }
    })
}
    render() {
        return(
            <ProductContext.Provider value={{...this.state,
            handleCategory: this.handleCategory,
            addToCart:this.addToCart,
            openModal:this.openModal,
            closeModal:this.closeModal,
            increaseQuantity:this.increaseQuantity,
            decreaseQuantity:this.decreaseQuantity,
            removeItem:this.removeItem,
            clearCart:this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )

    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer };