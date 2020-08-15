import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Experience } from './Experience';
import { Passion } from './Passion';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavBar} from './components/NavBar';
import { Jumbotron } from './components/Jumbotron';
import { End } from './components/End';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Jumbotron />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/experience" component={Experience} />
          <Route path="/passion" component={Passion} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <End />
    </React.Fragment>
  );
}

export default App;
