import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';
import {ProductConsumer} from '../Context';

export default class ProductsList extends Component {
    constructor(propes)
{
    super(propes);
    this.state={
    mobiles: storeProducts
     };
    }

    render()
     {
        console.log(this.state.Products)
        return (
           <React.Fragment>
               <div className="py-4 ">
                   <div className="container mt-0" id="title">
                      <Title name="Our" title="Products"/>
                     
                     <Product mobiles={this.state.mobiles}/>
                  </div>
               </div>
           </React.Fragment>
        )
    }
}
