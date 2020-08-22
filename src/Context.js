import React, { Component } from 'react'
const ProductContext=React.createContext();
//provider
//consumer

export default class ProductProvider extends Component {

    render() {
        return (
           <ProductContext.Provider value="hellow from context">
               {this.props.children}
           </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider,ProductConsumer};