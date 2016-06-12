import React from 'react'
import {Route} from 'react-router'

// main container
import Container from './Container'

// child container
import Map from './Map/Map'
import Detail from './Detail/Detail'

export const makeMainRoutes = () => {
  console.log('Enter container routes');
  return (
    <Route path="/" component={Container}>
      <Route path="map" component={Map} />
      <Route path="detail/:placeId" component={Detail} />
    </Route>
  )
}

export default makeMainRoutes;
