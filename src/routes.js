import React from 'react'
import {Router, Route} from 'react-router'

import makeMainRoutes from './views/Main/routes'

export const makeRoutes = () => (
  <Router>
    {makeMainRoutes()}
  </Router>
)

export default makeRoutes;
