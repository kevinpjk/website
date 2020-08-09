import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
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
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
      <End />
    </React.Fragment>
  );
}

export default App;
