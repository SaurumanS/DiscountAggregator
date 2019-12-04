import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;


    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    static renderForecastsTable(forecasts) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Names</th>
                        <th>Logos</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.name}>
                            <td>{forecast.name}</td>
                            <td>{forecast.logo}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
    render() {
    let contents = this.state.loading
                         ? <p><em>Loading...</em></p>
                        : Counter.renderStoreTable(this.state.forecasts);
      return (
          <section id="contact">

              <div class="social column">
                  <h1>Cock len</h1>

                  <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong>mm</p>

                  <button className="btn btn-primary" onClick={this.incrementCounter}>+1mm</button>
              </div>
              <div className="row">
                  <div className="bg-dark"></div>
              </div>

                  

          </section>

    );
  }
    async populateStoreData() {
        const response = await fetch('api/Store');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}
