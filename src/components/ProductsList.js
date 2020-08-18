import React, { Component } from 'react';
import Product from './Products';

export default class ProductsList extends Component {
    render() {
        return (
            <div>
                <h3>
                    Welcome from ProducrtList
                    <Product/>
                </h3>
            </div>
        )
    }
}
