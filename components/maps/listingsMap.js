import { MapView } from "expo";
import React from "react";
const {Marker} = MapView;

export default class ListingsMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [{
              latlng: { 
                latitude: 43.6637987, 
                longitude: -79.34360800000002
              },
              title: "Obsidian Theatre",
              decscription: "Black Arts Matter"
            }]
        }
    };
    async componentDidMount() {
        console.log(this.state.markers[0].latlng)
    };
    getMarkers(){

    };
    render() {
      return (
        <MapView
          style={{
            flex: 1
          }}
          initialRegion={{
            latitude: 43.642567,
            longitude: -79.387054,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
        {this.state.markers.map(marker =>(
            <Marker
            coordinate={marker.latlng}
            title={marker.title}
            key={marker.title}
            description={marker.description}
            />
        ))}
        </MapView>
      );
    }
  }