import { YMaps, Map, Placemark } from "react-yandex-maps";
import React, { Component } from 'react';


export class MapY extends Component {


    render() {
        return (<div class="row">
            <div class="col-12">
                {App}

            </div>
        </div>

        );
    }
}

const mapData = {
    center: [55.751574, 37.573856],
    zoom: 5,
};

const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521]
];

const App = () => (
    <YMaps>
        <Map defaultState={mapData}>
            {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
        </Map>
    </YMaps>
);