import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
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
}
