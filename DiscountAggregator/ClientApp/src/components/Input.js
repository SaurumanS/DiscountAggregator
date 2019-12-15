import React, { Component } from 'react';


export class Input extends Component {

    render() {
        return (  
            <section id="main">


                <header id="header">
                    <div>Snapshot <span>by TEMPLATED</span></div>
                </header>

            <div>
                <section id="contact" >

                    <div className=" column">
                    
                        <h3>Продукты</h3>                
                        <Product />
                      
                   </div>

                    <div className="social column">
                        <h3>Магазин</h3>
                        <Shop />
                    </div>
                </section>
                <section id="contact" >

                    <div className=" column">
                        <h3>Вид продукта</h3>
                        <ProductVariety />
                    </div>

                    <div className="social column">
                        <h3>Тип продукта</h3>
                        <ProductType />
                    </div>
                </section>
            </div>
          </section >
        );
    }
}
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', name: ''};

        this.handleChange = this.handleChange.bind(this);      
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value.toUpperCase() });
        this.setState({ name: event.target.name});
    }

    handleSubmit(event) {
       
        alert('Отправленное имя: ' + this.state.name + "    " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                   Value:
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Имя:
                  <input type="text" name={this.state.name} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Отправить" />
            </form>
        );
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
                <h1>{this.state.error}</h1>
                <label> Name:
                    <input type="text" name="name" placeholder="Name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} />
                </label><br />
                <ul>
                    {this.state.errorsState["Name"].map(error => <li>{error}</li>)}
                </ul>
                <label>ProductVariety:
                  <select value={this.state.selectedVariety}
                        onChange={this.handleChangeSelectedVariety.bind(this)} required>
                    {this.state.itemsVariety.map((item) => <option key={item.value} value={item.value}>{item.display}</option>)}
                    </select>
                </label>
                <ul>
                    {this.state.errorsState["ProductVariety"].map(error => <li>{error}</li>)}
                </ul>
                <br />


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

                <label> NewPrice:<br />
                    <input type="number" name="NewPrice" placeholder="NewPrice" value={this.state.newPrice} onChange={(event) => this.setState({ newPrice: event.target.value })} />
                </label>
                <ul>
                    {this.state.errorsState["NewPrice"].map(error => <li>{error}</li>)}
                </ul><br />

                <label> OldPrice:<br />
                    <input type="number" name="OldPrice" placeholder="OldPrice" value={this.state.oldPrice} onChange={(event) => this.setState({ oldPrice: event.target.value })} />
                </label>
                <ul>
                    {this.state.errorsState["OldPrice"].map(error => <li>{error}</li>)}
                </ul><br />

                <label> pic_url:
                    <input type="text" name="pic_url" placeholder="pic_url" value={this.state.formValues["pic_url"]} onChange={this.handleChange.bind(this)} />
                </label>
                <ul>
                    {this.state.errorsState["Photo"].map(error => <li>{error}</li>)}
                </ul><br />

                <label>Store:
                    <select value={this.state.selectedStore}
                        onChange={(event) => this.setState({ selectedStore: event.target.value })}>
                        {this.state.itemsStore.map((item) => <option key={item.value} value={item.value}>{item.display}</option>)}
                    </select>
                </label>
                <ul>
                    {this.state.errorsState["Store"].map(error => <li>{error}</li>)}
                </ul>
                <br />
                <input classNameName="btn btn-primary" type="submit" value="Submit" />
            </form>
        )
    }
}


class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formValues: {},
            errorsState: {
                Name: [],
                Photo: []
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

    handleSubmit(event) {
        event.preventDefault();
        const Name = this.state.formValues['name'];
        const Logo = this.state.formValues['logo_url'];
        const _errors = this.state.errorsState;
        fetch('api/Store/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.formValues['name'],
                photo: this.state.formValues['logo_url'],
            })
        }).then((error) => error.json())
            .then((error) => {
                console.log(error)
                if (error.errors.hasOwnProperty('Name'))
                    _errors.Name = error.errors.Name;
                else 
                    _errors.Name = [];
                if (error.errors.hasOwnProperty('Photo'))
                    _errors.Photo = error.errors.Photo;
                else
                    _errors.Photo = [];
                this.setState({ errorsState: _errors });
            })
        
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>

                <label> Name:
                    <input type="text" name="name" placeholder="Name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} />
                </label>
                <ul>
                    {this.state.errorsState["Name"].map(error => <li>{error}</li>)}
                </ul>
                <br/>
                <label> logo_url:
                    <input type="text" name="logo_url" placeholder="logo_url" value={this.state.formValues["logo_url"]} onChange={this.handleChange.bind(this)} />
                </label><br />
                <ul>
                    {this.state.errorsState["Photo"].map(error => <li>{error}</li>)}
                </ul>
                <input classNameName="btn btn-primary" type="submit" value="Submit" />
            </form>
        )
    }
}


class ProductVariety extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formValues: {},
            errorsState: {
                Name: []
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

    handleSubmit(event) {
        event.preventDefault();
        const Name = this.state.formValues['name'];
        const _errors = this.state.errorsState;

        fetch('api/ProductVariety/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: Name,
            })

        }).then((error) => error.json())
            .then((error) => {
                console.log(error)
                if (error.errors.hasOwnProperty('Name'))
                    _errors.Name = error.errors.Name;
                else
                    _errors.Name = [];
                this.setState({ errorsState: _errors });
            })


    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label> Name:
                    <input type="text" name="name" placeholder="Name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} />
                </label><br />
                <ul>
                    {this.state.errorsState["Name"].map(error => <li>{error}</li>)}
                </ul>
                <input classNameName="btn btn-primary" type="submit" value="Submit" />
            </form>
        )
    }
}


class ProductType extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formValues: {},
            value: 'orange',
             tech: 'select',
            Variety: [],
            items: [],
            selected: "",
            errorsState: {
                Name: [],
                VarietyID: []
            }
        }
    }
   
    handleChange(event) {
        event.preventDefault();
        let formValues = this.state.formValues;
        let name = event.target.name;
        let value = event.target.value;

        formValues[name] = value;

        this.setState({ formValues  })
    }


    handleSubmit(event) {
        event.preventDefault();
        const Name = this.state.formValues['name'];
        const ProductVariety = this.state.selected;
        const _errors = this.state.errorsState;

        fetch('api/ProductType/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: Name,
                varietyid: ProductVariety,
            })
        }).then((error) => error.json())
            .then((error) => {
                console.log(error)
                if (error.errors.hasOwnProperty('Name'))
                    _errors.Name = error.errors.Name;
                else
                    _errors.Name = [];
                if (error.errors.hasOwnProperty('VarietyID'))
                    _errors.VarietyID = error.errors.VarietyID;
                else
                    _errors.VarietyID = [];
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
                this.setState({ items: [{ value: '', display: '(Select variety)' }].concat(itemsFromApi) });
            }).catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>

                <label> Name:
                    <input type="text" name="name" placeholder="Name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} />
                </label><br />
                <ul>
                    {this.state.errorsState["Name"].map(error => <li>{error}</li>)}
                </ul>
                <h5>ProductVariety:</h5>
                <select value={this.state.selected}
                    onChange={(event) => this.setState({ selected: event.target.value })}>
                    {this.state.items.map((item) => <option key={item.value} value={item.value}>{item.display}</option>)}
                </select>
                <ul>
                    {this.state.errorsState["VarietyID"].map(error => <li>{error}</li>)}
                </ul>
                <br />

                <input classNameName="btn btn-primary" type="submit" value="Submit" />
            </form>
        )
    }
}

