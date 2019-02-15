import { Link } from "gatsby";
import React, { Component } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem
} from "reactstrap";

interface IProps {
  siteTitle;
}

interface IState {
  isOpen;
}

export default class Header extends Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="primary" dark expand="md">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {this.props.siteTitle}
          </Link>
          <NavbarBrand href="/" />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/collection-center">
                  Collection Center
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}
