import { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AddProduct from './AddProduct';
import ShowProducts from './ShowProducts';

function App() {
  
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={ShowProducts}></Route>
          <Route exact path="/add" component={AddProduct}></Route>
      </Switch>
    </Router>
  );
}

export default App;
