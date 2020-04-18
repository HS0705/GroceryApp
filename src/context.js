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
        cartTotal:0

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
        console.log(tempList);
        const index=tempList.indexOf(this.getSubCategory(subid));
        const product =tempList[index]
        product.inCart= true;
        product.count += 1;
        const price=product.price;
        product.total=  price * product.count;
    this.setState(()=>{
        return { subProducts:tempList, cart: [...this.state.cart, product] };
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
        return{modalOpen:false}
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
    console.log("Remove the Item");
}

clearCart =() =>{
    console.log("Empty cart");
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