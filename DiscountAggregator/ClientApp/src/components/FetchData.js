import React, { Component } from 'react';

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor(props) {
        super(props);
        this.state = { varietys: [], loading_varietys: true, types: [], loading_types: true, };
    }

    componentDidMount() {

        this.typesData();
        this.varietyData();
    }
    
    static renderVarietys(varietys) {
        return (
            <ul class="tabs" >
                    <li><input  classNameName="btn btn-primary" type="submit" value="All" /></li>
                {varietys.map(variety =>
                    <li><input  classNameName="btn btn-primary" type="submit" value={variety.name} /></li>
                )}
            </ul>
        );
    }


    static renderTypes(types) {
        return (
            <section className="row">
                {types.map(type =>
                    <div class="col-12 col-md-6 col-xl-4" key={type.name}>
                        <div class="card mb-3" style={{ height: "200px" }}>
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                  
                                    <img src={type.photo}  class="card-img" alt="..."/>
                         
                                </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                        <h5 class="card-title">{type.name}</h5>
                                        <p class="card-text">{type.newprice}</p>
                                        <p class="card-text">{type.AmountOfDiscount}</p>
                                        <p class="card-text"><small class="text-muted">Last updated 32 mins ago</small></p>
                                        </div>
                                    </div>
                             </div>
                         </div>
                    </div>
                )
                }
            </section>
        );
    }

    render() {


        let contents_varietys = this.state.loading_varietys
            ? <p><em>Loading...</em></p>
            : FetchData.renderVarietys(this.state.varietys);

        let contents_types = this.state.loading_types
            ? <p><em>Loading...</em></p>
            : FetchData.renderTypes(this.state.types);
        return (
            <section id="main">
                <header id="header">
                    <div>Goods and other stuff </div>
                </header>


                <section id="galleries">


                    <div class="gallery">

                        <header>
                            <h1>Variety:</h1>

                            {contents_varietys}

                        </header>
                        <div className="social column">
                            <Product/>
                            <h1>Product</h1>
                            {contents_types}

                        </div>


                    </div>
                </section>

            </section>
        );
    }
    async varietyData() {
        const response = await fetch('https://localhost:44393/api/ProductVariety');
        const data = await response.json();
        this.setState({ varietys: data, loading_varietys: false });
    }
    async typesData() {
        const response = await fetch('https://localhost:44393/api/Product');
        const data = await response.json();
        this.setState({ types: data, loading_types: false });
    }

}
class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formValues: {},
            itemsVariety: [],
            itemsType: [],
            itemsStore: [],
            selectedVariety: null,
            selectedStore: null,
            selectedType: null,
            newPrice: null,
            oldPrice: null,
            errorsState: {
                Name: [],
                ProductVariety: [],
                ProductType: [],
                OldPrice: [],
                NewPrice: [],
                Photo: [],
                Store: [],
            }
        }
    }

    handleChange(event) {
        event.preventDefault();
        let formValues = this.state.formValues;
        let name = event.target.name;
        let value = event.target.value;

        formValues[name] = value;

        this.setState({ formValues })
    }

    handleChangeSelectedVariety(event) {
        event.preventDefault();

        this.setState({ selectedVariety: event.target.value, itemsType: [] })
        const SelectedVariety = this.state.selectedVariety;
        let url = "api/ProductType/GetFromId/" + event.target.value;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let itemsFromApi = data.map(item => { return { value: item.id, display: item.name } })
                this.setState({ itemsType: [{ value: null, display: '(Select type)' }].concat(itemsFromApi) });

            }).catch(e => {
                this.setState({ error: e.message })
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        const Name = this.state.formValues['name'];
        const selectedVariety = this.state.selectedVariety;
        const selectedType = this.state.selectedType;
        const NewPrice = parseFloat(this.state.newPrice);
        const OldPrice = parseFloat(this.state.oldPrice);
        const pic_url = this.state.formValues['pic_url'];
        const selectedStore = this.state.selectedStore;
        const _errors = this.state.errorsState;

        fetch('api/Product/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: Name,
                productvariety: selectedVariety,
                producttype: selectedType,
                oldprice: OldPrice,
                newprice: NewPrice,
                photo: pic_url,
                store: selectedStore
            })

        }).then((error) => error.json())
            .then((error) => {
                console.log(error);
                if (error.errors.hasOwnProperty('Name'))
                    _errors.Name = error.errors.Name;
                else
                    _errors.Name = [];

                if (error.errors.hasOwnProperty('Photo'))
                    _errors.Photo = error.errors.Photo;
                else
                    _errors.Photo = [];

                if (error.errors.hasOwnProperty('ProductVariety'))
                    _errors.ProductVariety = error.errors.ProductVariety;
                else
                    _errors.ProductVariety = [];

                if (error.errors.hasOwnProperty('ProductType'))
                    _errors.ProductType = error.errors.ProductType;
                else
                    _errors.ProductType = [];

                if (error.errors.hasOwnProperty('OldPrice'))
                    _errors.OldPrice = error.errors.OldPrice;
                else
                    _errors.OldPrice = [];

                if (error.errors.hasOwnProperty('NewPrice'))
                    _errors.NewPrice = error.errors.NewPrice;
                else
                    _errors.NewPrice = [];

                if (error.errors.hasOwnProperty('Store'))
                    _errors.Store = error.errors.Store;
                else
                    _errors.Store = [];

                this.setState({ errorsState: _errors });
            })


    }

    componentDidMount() {
        fetch("api/ProductVariety/")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let itemsFromApi = data.map(item => { return { value: item.id, display: item.name } })
                this.setState({ itemsVariety: [{ value: null, display: '(Select variety)' }].concat(itemsFromApi) });
            }).catch(error => {
                console.log(error);
            });

        fetch("api/Store/")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let itemsFromApi = data.map(item => { return { value: item.id, display: item.name } })
                this.setState({ itemsStore: [{ value: null, display: '(Select store)' }].concat(itemsFromApi) });
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
              
                <label>ProductVariety:
                  <select value={this.state.selectedVariety}
                        onChange={this.handleChangeSelectedVariety.bind(this)} required>
                        {this.state.itemsVariety.map((item) => <option key={item.value} value={item.value}>{item.display}</option>)}
                    </select>
                </label>
               


                <div >
                    <label>ProductType:
                        <select value={this.state.selectedType}
                            onChange={(event) => this.setState({ selectedType: event.target.value })}>
                            {this.state.itemsType.map((item) => <option key={item.value} value={item.value}>{item.display}</option>)}
                        </select>
                    </label>
                    <ul>
                        {this.state.errorsState["ProductType"].map(error => <li>{error}</li>)}
                    </ul>
                </div>

              
                <br/>
                <input classNameName="btn btn-primary" type="submit" value="Submit" />
            </form>
        )
    }
}

