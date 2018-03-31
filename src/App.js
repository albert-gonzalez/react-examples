import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import NavBar from './components/navbar/navbar';
import HomePage from './pages/home/home';
import reducers from './reducers';
import logo from './logo.svg';
import ButtonPageContainer from './containers/button/buttonPage';
import RgbPickerPage from './pages/rgbPicker/rgbPicker';

const store = createStore(reducers);
const menu = [
  { href: '/react-examples/button', name: 'Button' },
  { href: '/react-examples/rgb-picker', name: 'RGB Picker' }
];

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBar
              brand={{
                href: '/react-examples',
                children: (
                  <img className="logo" src={logo} alt="React Examples" />
                )
              }}
              items={menu}
            />
            <Route
              exact
              path="/(react-examples)?"
              render={props => <HomePage {...props} menu={menu} />}
            />
            <Route
              exact
              path="/react-examples/button"
              component={ButtonPageContainer}
            />
            <Route
              exact
              path="/react-examples/rgb-picker"
              component={RgbPickerPage}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
