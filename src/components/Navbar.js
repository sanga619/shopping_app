import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonCountainer} from "./Button";
export default class extends Component{
     render(){
         return (
             <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
                  {/*<nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
                    https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */}
                    <Link to='/'>
                        <img src={logo} alt="store" className="navabr-brand">

                        </img>
                    </Link>
                    <ul className="nav-navbar align-item-center">
                        <li className="nav-item mi-5">
                            <Link to="/" className="nav-link">
                                products
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
