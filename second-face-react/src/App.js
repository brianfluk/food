import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { mainRoutes } from 'routes.jsx';
// import { Home } from '/components/home.jsx';
// import './components/home.jsx';
import mainRoutes from './Routes.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>hi</div>
      // <Provider>
        // <Router>
        //   {mainRoutes.map((route) => {
        //     return <Route path={route.path} component={route.component} />
        //   })}
        //   {/* <Route path="/:filter?" component={App} /> */}
        // </Router>
      // </Provider>
    );
  }
}

export default App;
