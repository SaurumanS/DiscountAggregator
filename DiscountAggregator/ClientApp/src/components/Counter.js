import React, { Component } from 'react';

export class Counter extends Component {
    static displayName = Counter.name;

    componentDidMount() {
        
        this.typesData();
       
    }

    constructor(props) {
        super(props);
        this.state = {
            forecasts: [],
            loading: true,
            formValues: {},
            tech: 'select',
            Variety: [],
            itemsStore: [],
            selected: "",
            types: [],
            loading_types: true
        };
    }
    static renderTypes(types) {
        return (
            <div class="content">           
                {types.map(type =>
                    <div class="media all people" key={type.name}>
                        <a href={type.name} style={{ maxHeight: "190px" }}>
                            <img src={type.photo} alt="" title={type.name} />
                        </a>                       
                    </div>
                )
                }
            </div>           
        );
    }
    render() {
        let contents_types = this.state.loading_types
            ? <p><em>Loading...</em></p>
            : Counter.renderTypes(this.state.types);
        return (
            <div class="page-wrap" style={{ minHeight: "1080px" }}>
                <section id="main">

                    <header id="header">
                        <div>DisAgg</div>
                    </header>

                    <section id="galleries">


                        <div class="gallery">

                            <header>
                                <h1>Our partners</h1>
                               
                            </header>
                         
                            {contents_types}
                        </div>
                    </section>
                    


                </section>
            </div>


        );
    }

    async typesData() {
        const response = await fetch('https://localhost:44393/api/Store');
        const data = await response.json();
        this.setState({ types: data, loading_types: false });
    }
}

