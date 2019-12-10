import React, { Component } from 'react';

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor(props) {
        super(props);
        this.state = { stores: [], loading_stores: true, varietys: [], loading_varietys: true, types: [], loading_types: true,  };
    }

    componentDidMount() {
        this.storesData();
    }

    static renderStores(stores) {
        return (
            <section className="row">
                {stores.map(store =>
                    <div class="col-12" key={store.name}>
                        <span class="image left special"><img class="" src={store.logo}></img></span>
                        <h3>{store.name}</h3>
                        <p>
                            Adipiscing dis a mus a convallis condimentum molestie penatibus iaculis  malesuada tempus vestibulum commodo habitasse suspendisse magnis.
						</p>
                    </div>                              
                       )
    }     
            </section>
        );
    }
    static renderVarietys(varietys) {
        return (
            <section className="row">
                {varietys.map(variety =>
                    <div class="col-12" key={variety.name}>
                        <span class="image left special"><img class="" src={variety.logo}></img></span>
                        <h3>{variety.name}</h3>
                        <p>
                            Adipiscing dis a mus a convallis condimentum molestie penatibus iaculis  malesuada tempus vestibulum commodo habitasse suspendisse magnis.
						</p>
                    </div>
                )
                }
            </section>
        );
    }
    static renderTypes(types) {
        return (
            <section className="row">
                {types.map(type =>
                    <div class="col-12" key={type.name}>
                        <span class="image left special"><img class="" src={type.logo}></img></span>
                        <h3>{type.name}</h3>
                        <p>
                            Adipiscing dis a mus a convallis condimentum molestie penatibus iaculis  malesuada tempus vestibulum commodo habitasse suspendisse magnis.
						</p>
                    </div>
                )
                }
            </section>
        );
    }

render() {
    let contents_stores = this.state.loading_stores
        ? <p><em>Loading...</em></p>
        : FetchData.renderStores(this.state.stores);  
    
    let contents_varietys = this.state.loading_varietys
        ? <p><em>Loading...</em></p>
        : FetchData.renderVarietys(this.state.varietys);

    let contents_types = this.state.loading_types
        ? <p><em>Loading...</em></p>
        : FetchData.renderTypes(this.state.types);
    return (
        <section id="main">
            <header id="header">
                <div>Snapshot <span>by TEMPLATED</span></div>
            </header>
            <section id="contact">
                <div class="social column">
                   <h3>Stores</h3>
                    {contents_stores}
                </div>
                <div className="row">
                    <div className="bg-dark"></div>
                </div>

                <div class="column">
                    <h3>Varietys</h3>
                    {contents_varietys}
                    <h3>Types</h3>
                    {contents_types}
                </div>

            </section>
        </section>
    );
}

async storesData() {
    const response = await fetch('api/store');
    const data = await response.json();
    this.setState({ stores: data, loading_stores: false });
    }

async varietyData() {
    const response = await fetch('api/productvariety');
    const data = await response.json();
    this.setState({ varietys: data, loading_varietys: false });
    }
async varietyData() {
    const response = await fetch('api/producttype');
    const data = await response.json();
    this.setState({ types: data, loading_types: false });
}
}