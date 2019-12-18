import React, { Component } from 'react';

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor(props) {
        super(props);
        this.state = {   };
    }

    componentDidMount() {
       
        this.typesData();
        this.varietyData();
    }
   

    render() {

        return (
            <section id="main" style={{minHeight: "100vh"}}>
            <header id="header">
                <div>Goods and another stuff and Varietys  </div>
            </header>
                   
                
            <section id="galleries">
                

                <div class="gallery">

                        <Product/>
          
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
            itemsProduct: [],
            display: "",
            error: null
        }
    }

   

    handleChangeSelectedVariety(event) {
        if (event.target.id == 1234) {
            fetch("api/Product")
                .then((response) => {
                    return response.json();
                })
                .then(data => {
                    //let itemsFromApi = data.map(item => { return { value: item.id, display: item.name } })
                    this.setState({ itemsProduct: data });

                }).catch(e => {
                    this.setState({ error: e.message })
                });
        } else {
            let url = "api/Product/GetFromVarietyID/" + event.target.id;
            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then(data => {
                    //let itemsFromApi = data.map(item => { return { value: item.id, display: item.name } })
                    this.setState({ itemsProduct: data });

                }).catch(e => {
                    this.setState({ error: e.message })
                });
        }
    }
   
 
    componentDidMount() {
        fetch("api/ProductVariety/")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let itemsFromApi = data.map(item => { return { value: item.id, display: item.name } })
                this.setState({ itemsVariety: [{ value: 1234, display: 'All' }].concat(itemsFromApi) });
            }).catch(error => {
                console.log(error);
            });
      
    }

    render() {
        return (
            <div> 
                    <ul class="tabs" required>
                        {this.state.itemsVariety.map(variety =>
                            <li>
                                <input 
                                    classNameName="btn btn-primary"
                                    id={variety.value}
                                    type="submit"
                                    onClick={(event) => this.handleChangeSelectedVariety(event)}
                                    value={variety.display}/>
                            </li>
                        )}
                    </ul>



                <section className="row">
                    {this.state.itemsProduct.map((item) =>
                        <div class="col-md-4" key={item.name}>
                            <div class="card mb-3" style={{ maxWidth: "540px"}}>
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                  <img src={item.photo} class="card-img" alt="..."/>
                                  </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">{item.name}</h5>
                                            <p class="card-text">{toString( item.oldprice)}</p>
                                            <p class="card-text">{toString( item.dicountofamount)}</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </div>
            
                   

        )
    }
}
