import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';


export class CustomSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formValues: {},
            tech: 'select',
            Variety: ["https://i.ytimg.com/vi/1cQHKwWzKfc/hqdefault.jpg","https://cs7.pikabu.ru/post_img/2017/10/25/7/1508928737199228093.jpg"],
            items: [],
            selected: "",
        }
    }
     componentDidMount() {
        fetch("https://localhost:44393/api/Store/")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let itemsFromApi = data.map(item => { return { value: item.id, display: item.logo } })
                this.setState({ items: [{ value: '', display: ''}].concat(itemsFromApi) });
               
                this.state.items.map((item) => this.state.Variety[item.value]=item.display)                    
                         
            }).catch(error => {
                console.log(error);
            });      
    }
    render() {
        const settings = {
            adaptiveHeight: true,
            dots: true,
            duration: 100,
            slidesToShow: 3
        };
        return (
            <div >
                <Slider {...settings}>                  
                                
                    <div>
                        <img src={this.state.Variety['0']}></img>
                    </div>
                    <div>
                        <img src={this.state.Variety['1']}></img>
                    </div>
                    <div>
                        <img src={this.state.Variety['5dd122d77433973084207b44']}></img>
                    </div>
                    <div>                     
                        <img src={this.state.Variety['5dd126939cc0e70e04ad911d']}></img> 
                    </div>
                    <div>
                        <img src={this.state.Variety['5dd2b78d7642ab1004869b9b']}></img> 
                    </div>
                    <div>
                        <img src={this.state.Variety['5de5354748cc262e001c76dd']}></img> 
                    </div>
                    <div>
                        {this.state.items.display}
                    </div>
                   
                    
                </Slider>
            </div>
        );
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
    componentDidMount() {
        fetch("https://localhost:44393/api/Store/")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let itemsFromApi = data.map(item => { return { value: item.id, display: item.logo } })
                this.setState({ items: [{ value: '', display: '' }].concat(itemsFromApi) });
            }).catch(error => {
                console.log(error);
            });      
    }

    render() {
        const SimpleSlider = () => (
            <div >
                <Slider dots >
                    {this.state.items.map((item) =>
                        <img key={item.value} value={item.value}
                            src={item.display}>
                        </img>)
                    }        
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>

                    </Slider>
            </div>)
          return (
          <section id="contact">

              <div class="social column">
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
                  <ul class="icons">
                      <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
                      <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
                      <li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
                  </ul>
              </div> 
              <div class="column">
                  <SimpleSlider /> 
                  <CustomSlider />
              </div>
          </section>
    
    );
  }
}
