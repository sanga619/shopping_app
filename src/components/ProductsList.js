import React, { Component } from 'react';
import Product from './Products';

export default class ProductsList extends Component {
    state={
        product:[]
    }
    render() {

        return (
            <div>
            <Product/>

            </div>
                
        )
    }
}
