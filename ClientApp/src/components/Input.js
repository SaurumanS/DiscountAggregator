import React, { Component } from 'react';

let colors = ['orange', 'red', 'blue', 'purple'];
let Variety = ['orange', 'red', 'blue', 'purple'];

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
            tech: 'select',
            Variety: [],
            itemsVariety: [],
            itemsType: [],
            itemsStore: [],
            selectedVariety: "",
            selectedStore: "",
            selectedType: "",
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

        let url = "https://localhost:44393/api/ProductType/GetFromName/" + event.target.value;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let itemsFromApi = data.map(item => { return { value: item.id, display: item.name } })
                this.setState({ itemsType: [{ value: '', display: '(Select type)' }].concat(itemsFromApi) });
               
            }).catch(error => {
                console.log(error);
            });

        
      
        
    }  

    handleSubmit(event) {
        event.preventDefault();
        const Name = this.state.formValues['name'];
        const selectedVariety = this.state.selectedVariety;
        const selectedType = this.state.selectedType;
        const NewPrice = this.state.formValues['NewPrice'];
        const OldPrice = this.state.formValues['OldPrice'];
        const pic_url = this.state.formValues['pic_url'];
        const selectedStore = this.state.selectedStore;


        if (Name != null && selectedVariety != null && selectedType != null &&  pic_url != null && selectedStore != null) {
            fetch('https://localhost:44393/api/Product/' , {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: Name,
                    productvariety: this.state.selectedVariety,
                    producttype: this.state.selectedType,
                    oldprice: this.state.formValues['OldPrice'],
                    newprice: this.state.formValues['NewPrice'],
                    photo: this.state.selectedStore,
                    store: selectedStore
                })
            })
            alert('bad shit, bro')
        } else {
            alert('try again')
        }

    }

    componentDidMount() {
        fetch("https://localhost:44393/api/ProductVariety/")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let itemsFromApi = data.map(item => { return { value: item.id, display: item.name } })
                this.setState({ itemsVariety: [{ value: '', display: '(Select variety)' }].concat(itemsFromApi) });
            }).catch(error => {
                console.log(error);
            });
   
        fetch("https://localhost:44393/api/Store/")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let itemsFromApi = data.map(item => { return { value: item.id, display: item.name } })
                this.setState({ itemsStore: [{ value: '', display: '(Select store)' }].concat(itemsFromApi) });
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
            

                <label>ProductVariety:
                  <select value={this.state.selectedVariety}
                        onChange={this.handleChangeSelectedVariety.bind(this)}>
                    {this.state.itemsVariety.map((item) => <option key={item.value} value={item.value}>{item.display}</option>)}
                    </select>
                </label>

                <br />


                <div >
                    <label>ProductType:
                        <select value={this.state.selectedType}
                            onChange={(event) => this.setState({ selectedType: event.target.value })}>
                            {this.state.itemsType.map((item) => <option key={item.value} value={item.value}>{item.display}</option>)}
                        </select>
                    </label>
                </div>

                <label> NewPrice:<br />
                    <input type="number" name="NewPrice" placeholder="NewPrice" value={this.state.formValues["NewPrice"]} onChange={this.handleChange.bind(this)} />
                </label><br />

                <label> OldPrice:<br />
                    <input type="number" name="OldPrice" placeholder="OldPrice" value={this.state.formValues["OldPrice"]} onChange={this.handleChange.bind(this)} />
                </label><br />

                <label> pic_url:
                    <input type="text" name="pic_url" placeholder="pic_url" value={this.state.formValues["pic_url"]} onChange={this.handleChange.bind(this)} />
                </label><br />

                <label>Store:
                    <select value={this.state.selectedStore}
                        onChange={(event) => this.setState({ selectedStore: event.target.value })}>
                        {this.state.itemsStore.map((item) => <option key={item.value} value={item.value}>{item.display}</option>)}
                    </select>
                </label>
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
            formValues: {}
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

        if (Name != null) {
            if (Logo != null) {
                fetch('https://localhost:44393/api/Store/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: this.state.formValues['name'],
                        logo: this.state.formValues["logo_url"],
                    })
                })
                alert('good shit, bro')
            } else {
                alert('enter logo_url')
            }
        } else {
            alert('try again')
        }
        
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>

                <label> Name:
                    <input type="text" name="name" placeholder="Name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} />
                </label><br />

                <label> logo_url:
                    <input type="text" name="logo_url" placeholder="logo_url" value={this.state.formValues["logo_url"]} onChange={this.handleChange.bind(this)} />
                </label><br />

                <input classNameName="btn btn-primary" type="submit" value="Submit" />
            </form>
        )
    }
}


class ProductVariety extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formValues: {}
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
       

        if (Name != null) {          
            fetch('https://localhost:44393/api/ProductVariety/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: Name, 
                })
            })
            alert('good shit, bro')           
        } else {
            alert('try again')
        }

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>

                <label> Name:
                    <input type="text" name="name" placeholder="Name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} />
                </label><br />

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

        if (Name != null) {
            if (ProductVariety != null) {
                fetch('https://localhost:44393/api/ProductType/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: Name,
                        varietyid: ProductVariety,
                    })
                })
                alert('good shit, bro')
            } else {
                alert('enter logo_url')
            }
        } else {
            alert('try again')
        }

    }
    componentDidMount() {
        fetch("https://localhost:44393/api/ProductVariety/")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let itemsFromApi = data.map(item => { return { value: item.id, display: item.name } })
                this.setState({ items: [{ value: '', display: '(Select store)' }].concat(itemsFromApi) });
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
                     
                <h5>ProductVariety:</h5>
                    <select value={this.state.selected}
                        onChange={(event) => this.setState({ selected: event.target.value })}>
                        {this.state.items.map((item) => <option key={item.value} value={item.value}>{item.display}</option>)}
                    </select>
                <br />

                <input classNameName="btn btn-primary" type="submit" value="Submit" />
            </form>
        )
    }
}

