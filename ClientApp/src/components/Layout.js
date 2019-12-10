import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
        <div className="page-wrap">
        <NavMenu />
        <section id="main">
                {this.props.children}
        </section>
      </div>
    );
  }
}
