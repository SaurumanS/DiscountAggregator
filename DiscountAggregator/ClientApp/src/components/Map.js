import React, { Component } from 'react';
import { YMaps, Map } from 'react-yandex-maps';


const mapState = { center: [45.035470, 38.975313], zoom: 11};


export class MapY extends Component {
    state = { showMap: true };

    toggleMap() {
        const { showMap } = this.state;
        this.setState({ showMap: !showMap });
    }
  
    render() {
        const { showMap } = this.state;
        return (
            <section id="main" style={{ minHeight:"100vh"}}>
                <header id="header">
                    <div>Maps and locations</div>
                </header>


                <section id="galleries">

                    <div class="gallery">
                        <YMaps>
                            <div id="map-basics">
                                {showMap &&

                                    <Map state={mapState} height={580} width={1300} />}

                              
                               
                            </div>
                        </YMaps>
                    </div>
                </section>

            </section>
          

        );
    }
}
