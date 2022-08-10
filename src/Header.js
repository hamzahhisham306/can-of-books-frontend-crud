import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {useAuth0} from '@auth0/auth0-react';
import AuthButtons from './AuthButtons';

function Header() {
  const {isAuthentocated} = useAuth0();
  
    return (
      <Navbar collapseOnSelect expand="lg"  variant="dark" className='header'>
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="link">Home</Link></NavItem>
        {isAuthentocated &&
        <NavItem><Link to='profile' className='link'>User Profile</Link></NavItem>
        }
                <NavItem><Link to="/about" className="link">About</Link></NavItem>
                <AuthButtons className={'Auth'} />
      </Navbar>
      
    )
  }


export default Header;
