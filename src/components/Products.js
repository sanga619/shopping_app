import React, { Component } from 'react'
import { renderIntoDocument } from 'react-dom/test-utils';
import {Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Button} from 'reactstrap';
export default class Products extends Component {

constructor(propes)
{
    super(propes);
    this.state={
    mobiles: [
         {
            id: 1,
            title: "Google Pixel - Black",
            img: "../img/product-1.png",
            price: 10,
            company: "GOOGLE",
            info:
              "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
          },
          {
            id: 2,
            title: "Samsung S7",
            img: "img/product-2.png",
            price: 16,
            company: "SAMSUNG",
            info:
              "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
          },
          {
            id: 3,
            title: "HTC 10 - Black",
            img: "img/product-3.png",
            price: 8,
            company: "htc",
            info:
              "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
          },
          {
            id: 4,
            title: "HTC 10 - White",
            img: "img/product-4.png",
            price: 18,
            company: "htc",
            info:
              "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
          },
          {
            id: 5,
            title: "HTC Desire 626s",
            img: "img/product-5.png",
            price: 24,
            company: "htc",
            info:
              "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
          },
          {
            id: 6,
            title: "Vintage Iphone",
            img: "img/product-6.png",
            price: 17,
            company: "apple",
            info:
              "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
          },
          {
            id: 7,
            title: "Iphone 7",
            img: "img/product-7.png",
            price: 30,
            company: "apple",
            info:
              "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
          },
          {
            id: 8,
            title: "Smashed Iphone",
            img: "img/product-8.png",
            price: 2,
            company: "apple",
            info:
              "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
          }
        ]
    }

        
    
}
    render() {
        const Products =this.state.mobiles.map((mobile)=>
        {
            return(
                <div key={mobile.id} clasName="col-12 mx-5 ">
                <Card style={{ width: '18rem' }}>
                <div class="card-header">
                   <h4 class="my-0 font-weight-normal text-center">{mobile.company}</h4>
                </div>
                <CardImg src={mobile.img} alt={mobile.company}/>
                
                    
                   
                    <Button class=" align-self-end btn btn-lg btn-block btn-primary">Add To Cart" </Button>
                   
                   
                   
                   
                   
                     
               
               
                
              </Card>
              </div>
            )

        });
        return (
            <div className="container mt-5">
                <div className="row">
                    
                        {Products}
                    
                </div>
                
            </div>
        );
    }
}

