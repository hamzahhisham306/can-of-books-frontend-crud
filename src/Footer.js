import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className='footer' variant="dark">
        <Navbar.Brand className='title'>Hamzah Aldaamas</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
