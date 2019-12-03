import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import 'react-widgets/dist/css/react-widgets.css';
import { DropdownList } from 'react-widgets'

let colors = ['orange', 'red', 'blue', 'purple'];
let Variety = ['orange', 'red', 'blue', 'purple'];

export class Input extends Component {

    render() {
        return (     
            <div>
                <section id="contact" >

                    <div class=" column">
                       
                        <h3>Продукты</h3>                
                        <Product />
                      
                   </div>

                    <div class="social column">
                        <h3>Магазин</h3>
                        <Shop />
                    </div>
                </section>
                <section id="contact" >

                    <div class=" column">
                        <h3>Вид продукта</h3>
                        <ProductVariety />
                    </div>

                    <div class="social column">
                        <h3>Тип продукта</h3>
                        <ProductType />
                    </div>
                </section>
            </div>
          
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
            Variety:[]
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
        alert(this.state.formValues['name'] + "   " + this.state.formValues['ProductVariety'] + "   " + this.state.formValues['coconut']  );
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        Variety: result,
                        colors: result
                    });
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
      
            <form onSubmit={this.handleSubmit.bind(this)}>
              
                <label> Name:
                    <input type="text" name="name" placeholder="Name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} />
                </label><br /> 


                <h5>ProductVariety:</h5>
                    <DropdownList
                        data={this.state.Variety}
                        value={this.state.value}
                        onChange={value => this.setState({ value })}
                /><br />

                <label> NewPrice:
                    <input type="number" name="NewPrice" placeholder="NewPrice" value={this.state.formValues["NewPrice"]} onChange={this.handleChange.bind(this)} />
                </label><br />  

                <label> OldPrice:
                    <input type="number" name="OldPrice" placeholder="OldPrice" value={this.state.formValues["OldPrice"]} onChange={this.handleChange.bind(this)} />
                </label><br />  

                <label> pic_url:
                    <input type="text" name="pic_url" placeholder="pic_url" value={this.state.formValues["pic_url"]} onChange={this.handleChange.bind(this)} />
                </label><br />  
                
                <h5>Store:</h5>
                <DropdownList
                    data={colors}
                    value={this.state.value}
                    onChange={value => this.setState({ value })}
                /><br />

                <input className="btn btn-primary" type="submit" value="Submit" />
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
        alert(this.state.formValues['name'] + "   " + this.state.formValues['logo_url'] );
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

                <input className="btn btn-primary" type="submit" value="Submit" />
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
        alert(this.state.formValues['name'] + "   " + this.state.formValues['logo_url']);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>

                <label> Name:
                    <input type="text" name="name" placeholder="Name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} />
                </label><br />

                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        )
    }
}


class ProductType extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formValues: {},
            value: 'orange' 
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
        alert(this.state.formValues['name'] + "   " + this.state.formValues['logo_url'] + "   " + this.state.value);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>

                <label> Name:
                    <input type="text" name="name" placeholder="Name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} />
                </label><br />
                     
                <h5>ProductVariety:</h5>
                    <DropdownList
                        data={colors}
                        value={this.state.value}
                        onChange={value => this.setState({ value })}
                /><br />

                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        )
    }
}



class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            colors:[]
        };
        }

        componentDidMount() {
            fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.title,
                    colors: result.title
                });
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            )
        }

        render() {
         let {items,colors} = this.state;
        
            return (
                <ul> 
                    <li>
                        {items}
                    </li>
                    <li>
                       {colors =this.state.colors}
                    </li>
                )}
            </ul>
            );
        
        }
}

