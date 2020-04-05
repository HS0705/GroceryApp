import React, {Component}  from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './button';
export default class Navbar extends Component{

    render() {
        return(
            <nav className="navbar navbar-exapnd-sm bg-primary navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" width="50" height="50"  />
                </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to ="/" className="nav-link">
                               Grocery Items
                            </Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fas fa-cart-plus" />
                            </span>                     
                            my cart
                        </ButtonContainer>
                    </Link>                
            </nav>
        );
    }
}

