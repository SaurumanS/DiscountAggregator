import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

      return (<section id="contact">

          <div class="social column">           
              <h1 id="tabelLabel" >Weather forecast</h1>
              <p>This component demonstrates fetching data from the server.</p>
              {contents}
          </div>
          <div className="row">
              <div className="bg-dark"></div>
          </div>

          <div class="column">
              <h3>Get in Touch</h3>
              <form action="#" method="post">
                  <div class="field half first">
                      <label for="name">Name</label>

                  </div>
                  <div class="field half">
                      <label for="email">Email</label>

                  </div>
                  <div class="field">
                      <label for="message">Message</label>
                      <textarea name="message" id="message" rows="6" placeholder="Message"></textarea>
                  </div>
                  <ul class="actions">
                      <li></li>
                  </ul>
              </form>
          </div>

      </section>
      
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
