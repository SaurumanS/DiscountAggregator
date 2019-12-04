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
            <div class="gallery">
                <div class="content">
                    {forecasts.map(forecast =>
                        <div key={forecast.name}>
                            <h3>{forecast.name}</h3>
                            <img class="" src={forecast.logo}></img>
                        </div>)}
                </div>
            </div>
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
        const response = await fetch('api/store');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}