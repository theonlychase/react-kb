import React, { Component } from 'react';
import Header from './Header';
import CompanyDirectory from './CompanyDirectory';
import HowWeDoStuff from './HowWeDoStuff';
import Training from './Training';
import Categories from './Categories';
import NoMatch from './NoMatch';
import { Switch, Route }  from "react-router-dom";
import Home from './Home';
import '../assets/css/App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      categories: {}
    }
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/company-directory' component={CompanyDirectory} />
          <Route exact path='/how-we-do-stuff' component={HowWeDoStuff} />
          <Route exact path='/training' component={Training} />
          <Route exact path='/categories' component={Categories} />
          <Route component={NoMatch}/>
      </Switch>
      </div>
    );
  }
}

export default App;
