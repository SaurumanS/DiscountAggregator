import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { MapY } from './components/Map';
import { FetchData } from './components/FetchData';

import { Counter } from './components/Counter';
import { Input } from './components/Input';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/map' component={MapY} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />     
        
        <Route path='/input' component={Input} />     
      </Layout>
    );
  }
}
