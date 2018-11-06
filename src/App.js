import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'


import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Error from './pages/Error.js';

class App extends Component {
  render() {
    return (
       <div className="App">
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route component={Error} />
        </Switch>
       </div>

      
    );
  }
}

export default App;
