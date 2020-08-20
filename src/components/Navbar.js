import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonCountainer} from "./Button";
export default class extends Component{
     render(){
         return (
             <NavWrapper className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark px-sm-5">
                  
                    <Link to='/' className="text-center navbar-brand">
                       <strong> MyApp</strong>
                    </Link>
                    <ul className="navbar-nav align-item-center mx-5">
                        <li className="nav-item mx-2">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item  mx-2">
                            <Link to="/" className="nav-link">
                                Product
                            </Link>
                        </li>
                        <li className="nav-item mx-2 ">
                            <Link to="/" className="nav-link">
                                About us
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/" className="nav-link">
                                Contact us
                            </Link>
                        </li>
                    
                    </ul>
                    <Link to="/cart" className="ml-auto">
                       <ButtonCountainer>
                            <i class="fa fa-cart-plus"/>
                            my cart
                        </ButtonCountainer>
                    </Link>
           </NavWrapper>
         )
     }
}
const NavWrapper=styled.nav`
background:var(--mainblue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize !important;
}

`;
