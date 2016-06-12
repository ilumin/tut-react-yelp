import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'

export class Container extends React.Component {
  render() {
    console.log('Render main container');
    return (
      <div>
        <Map
          google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container)
