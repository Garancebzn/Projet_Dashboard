import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Template from './components/Template';
import Routes from './routes';

import {
  // Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   NavLink,
    } from 'reactstrap';

class App extends Component {
  render() {    
    return (

    <div>

      <header>
              <Navbar color="light" light expand="md">
          <NavbarBrand href="/">MyMusic Dashboard</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
        
            <Nav className="ml-auto" navbar>
              <NavItem rignt>
                <NavLink href="/Contact">Contact</NavLink>
              </NavItem>

              </Nav>
          
              
            
         
        </Navbar>
        
        <Routes/>

        </header>


      </div>

    );
  }
}

export default App;
