import {
  Header,
  HeaderNavigation
} from "carbon-components-react/lib/components/UIShell";
import { Link } from "gatsby";
import React, { Component } from "react";

interface IProps {
  siteTitle;
}

interface IState {
  isOpen;
}

export default class HeaderComponent extends Component<IProps, IState> {
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
      <Header
        sitetitle={this.props.siteTitle}
        aria-label={this.props.siteTitle}
      >
        <Link className="bx--header__name" to="/">
          {this.props.siteTitle}
        </Link>
        <HeaderNavigation aria-label={this.props.siteTitle}>
          <li>
            <Link
              className="bx--header__menu-item"
              role="menuitem"
              to="/collection-center"
            >
              Collection Center
            </Link>
          </li>
        </HeaderNavigation>
      </Header>
    );
  }
}
