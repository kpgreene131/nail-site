import React from "react";
import styled from "styled-components";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '500px',
    position: 'relative',
};

const MapDiv = styled.div`
  & div:first-child {
    width: 40%;
    position: relative !important;
    margin-top: 20px;
  }

  z-index: -1;
`;

class MapContainer extends React.Component {

  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div>
        <MapDiv>
          <Map
              google={this.props.google}
              zoom={17}
              style={mapStyles}
              initialCenter={{ lat: 42.43590153526606, lng: -71.23407306664039 }} 
              containerStyle={{  }}
          >
            <Marker
              onClick={this.onMarkerClick}
              name={'Boston Nails and Spa, 313 Marrett Road, Lexington, MA 02421'}
            />

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>
        </MapDiv>
            

      </div>
    )
  }
}
 
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCQKNZDopcihmIg44X2VftakqWyaBRSOyw'
  })(MapContainer);