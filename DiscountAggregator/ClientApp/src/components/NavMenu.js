import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import '../main.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

    render() {
        return (           
            <nav id="nav">                 
                <ul>
                    <NavItem>
                        <NavLink tag={Link} to="/"><span className="icon fas fa-home"></span></NavLink>
                    </NavItem>
                         
                    <NavItem>
                        <NavLink tag={Link} to="/counter"><span className="icon fas fa-cash-register"></span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/fetch-data"><span className="icon fas fa-shopping-basket"></span></NavLink>
                    </NavItem>
                 
                    <NavItem>
                        <NavLink tag={Link} to="/map"><span className="icon fas fa-map-signs"></span></NavLink>
                    </NavItem>                                                                      
                    <NavItem>
                        <NavLink tag={Link} to="/input"><span className="icon fas fa-cog"></span></NavLink>
                    </NavItem>
                    </ul>          
            </nav>          
        );
         
                //return (
                //  <header>
                //    <Navbar classNameName="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                //      <Container>
                //        <NavbarBrand tag={Link} to="/">DiscountAggregator</NavbarBrand>
                //        <NavbarToggler onClick={this.toggleNavbar} classNameName="mr-2" />
                //        <Collapse classNameName="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                //          <ul classNameName="navbar-nav flex-grow">
                //            <NavItem>
                //              <NavLink tag={Link} classNameName="text-dark" to="/">Home</NavLink>
                //            </NavItem>
                //            <NavItem>
                //              <NavLink tag={Link} classNameName="text-dark" to="/counter">Counter</NavLink>
                //            </NavItem>
                //            <NavItem>
                //              <NavLink tag={Link} classNameName="text-dark" to="/fetch-data">Fetch data</NavLink>
                //            </NavItem>
                //          </ul>
                //        </Collapse>
                //      </Container>
                //    </Navbar>
                //  </header>
                //);
    }
}
