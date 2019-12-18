import React, { Component } from 'react';







export class MapY extends Component {
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
            display: ""
        }
    }
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    handleChangeSelectedVariety(event) {
        event.preventDefault();

        this.setState({ selectedVariety: event.target.value, itemsType: [] })
        const SelectedVariety = this.state.selectedVariety;
        let url = "api/Product/GetFrom/" + event.target.value;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let itemsFromApi = data.map(item => { return { value: item.id, display: item.name } })
                this.setState({ itemsType: itemsFromApi });

            }).catch(e => {
                this.setState({ error: e.message })
            });
        alert(event.target.value);
    }


    componentDidMount() {
        fetch("api/Store/")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let itemsFromApi = data.map(item => { return { value: item.id, display: item.name } })
                this.setState({ itemsVariety: itemsFromApi });
            }).catch(error => {
                console.log(error);
            });

    }

    render() {
        return (
            <section id="main" style={{ minHeight:"100vh"}}>
                <header id="header">
                    <div>Maps and locations</div>
                </header>


                <section id="galleries">


                    <div class="gallery">

                        <ul class="tabs" onClick={this.handleChangeSelectedVariety.bind(this)} required>
                            {this.state.itemsVariety.map(variety =>
                                <li>
                                    <input classNameName="btn btn-primary" type="submit" value={variety.display} />
                                </li>
                            )}
                        </ul>

                      

                    </div>
                </section>

            </section>
          

        );
    }
}
