import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Catalog from './views/catalog'
import Product from './views/product'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Catalog} exact path="/catalog" />
        <Route component={Product} exact path="/product" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
