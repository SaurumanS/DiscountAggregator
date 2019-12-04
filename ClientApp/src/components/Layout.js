import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
        <div class="page-wrap">
        <NavMenu />
        <section id="main">
                
                    <div class="inner">
                        <h1>Hey, I'm Snapshot</h1>
                        <p>A fully responsive gallery template by <a href="https://templated.co">TEMPLATED</a></p>
                        <ul class="actions">
                            <li><a href="#galleries" class="button alt scrolly big">Continue</a></li>
                        </ul>
                    </div>
           
                {this.props.children}
        </section>
      </div>
    );
  }
}
