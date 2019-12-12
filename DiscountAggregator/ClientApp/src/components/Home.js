import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

export class Carousel extends Component {
    render() {
        return (
            <div id="video-carousel-example" class="carousel slide carousel-fade" data-ride="carousel">

                <ol class="carousel-indicators">
                    <li data-target="#video-carousel-example" data-slide-to="0" class="active"></li>
                    <li data-target="#video-carousel-example" data-slide-to="1"></li>
                    <li data-target="#video-carousel-example" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <video class="video-fluid" autoplay loop muted>
                            <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div class="carousel-item">
                        <video class="video-fluid" autoplay loop muted>
                            <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div class="carousel-item">
                        <video class="video-fluid" autoplay loop muted>
                            <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <a class="carousel-control-prev" href="#video-carousel-example" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#video-carousel-example" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>

            </div>
            )

    }

}
export class Home extends Component {
    static displayName = Home.name;
    constructor(props) {
        super(props)
        this.state = {
            formValues: {},
            tech: 'select',
            Variety: [],
            items: [],
            selected: "",
        }
    }
   
   

    render() {     
        return (
            <section id="main">


                <header id="header">
                    <div>Snapshot <span>by TEMPLATED</span></div>
                </header>
           <div>   	
            <section id="banner">
                <div className="inner">
                    <h1>Hey, I'm DiscountAgreagator</h1>
                        
                    <ul className="actions">
                                <li><a href="https://i.kym-cdn.com/entries/icons/original/000/029/827/cover5.jpg" className="button alt scrolly big">Continue</a></li>
                    </ul>
                </div>
            </section>
          <section id="contact">

              <div className="social column">
                  <h1>Hello, world!</h1>
                  <p>Welcome to your new single-page application, built with:</p>
                  <ul>
                      <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
                      <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
                      <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
                  </ul>
                  <p>To help you get started, we have also set up:</p>
                  <ul>
                      <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
                      <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
                      <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
                  </ul>
                  <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
                  <ul className="icons">
                      <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                      <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                      <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                  </ul>
              </div> 
                    <div className="column">
                       <Carousel/>
                
                    </div>
             </section>
                </div>
            </section>
    
    );
  }
}
