import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Home } from './components/Home';
import { EditUser } from './components/EditUser';
import { AddUser } from './components/AddUser';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div style={{maxWidth: "30rem", margin:"4rem auto" }}>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/add" component={AddUser} />
          <Route path="/edit/:id" component={EditUser} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
