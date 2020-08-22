import React, { Component } from "react";
import { Link } from "react-router-dom";
import { renderIntoDocument } from "react-dom/test-utils";
import {
  Card,
  CardImg,
  Button,
} from "reactstrap";
export default class Product extends Component {
  
  
  render() {
    
    const Products = this.props.mobiles.map((mobile) => {
      return (
        <div key={mobile.id} clasName="col-12 mx-5 ">
          <Card class="card"style={{ width: "18rem" }}>
           
            <div
              className="img-container p-5"
              onClick={() =>console.log("hello")}
            >
              <Link to="/Details">
                <CardImg className="card-img-top" src={mobile.img} alt={mobile.company} />
              </Link>
              <Button
                class="cart-btn mx-auto"
                disabled={mobile.inCart ? true : false}
                onClick={() => {
                  console.log("added to cart");
                }}
              >
              {mobile.inCart ? (
                <p className="text-capitalization mb-0" disabled>
                  { " " }
                  in inCart
                </p>
              ) : (
                <i class="fa fa-cart-plus"/>
              )}
              </Button>
            </div>
        <div className="card-footer d-flex justify-content-between">
              <p className="align-self-center mb-0">{mobile.title}</p>
              <h5 className="text-blue font-italic mb-0">
                <span className="mr-1">$</span>
                {mobile.price}
              </h5>
        </div>
          </Card>

        </div>
      );
    });
    return (
      <div className="container mt-5">
        <div className="row">{Products}</div>
      </div>
    );
  }
}
/*  if someone chane my data type define in the data.js the whole thins will mash up, to protect it i need to do the following 
product.propTypes={
  product:PropTypes.shape(
    {
      id:propTypes.number,
      img:propTypes.string,
      title:propTypes.string,
      price:propTypes.string,
      inCard:propType.bool
    }
  ).isRequired
} ;
*/
