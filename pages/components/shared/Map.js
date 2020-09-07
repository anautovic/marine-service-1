import { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {
  state = {
    viewport: {
      width: '400px',
      height: '300px',
      latitude: 0.335362,
      longitude: 6.729528,
      zoom: 5
    }
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiYW5hdXRvdmljIiwiYSI6ImNrZXFzbXJ0NjFxbWEzMm84NGZpN3oxenEifQ.VQ8T705qpdRfnpmyeqASVg"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      />
    );
  }
}

export default Map;