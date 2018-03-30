import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import HomePage from "./pages/home/home";
import reducers from "./reducers";
import logo from "./logo.svg";
import ButtonPageContainer from "./containers/button/buttonPage";

const store = createStore(reducers);
const menu = [{ href: "/loading-button", name: "Button" }];

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBar
              brand={{
                href: "/",
                children: (
                  <img className="logo" src={logo} alt="React Examples" />
                )
              }}
              items={menu}
            />
            <Route
              exact
              path="/"
              render={props => <HomePage {...props} menu={menu} />}
            />
            <Route
              exact
              path="/loading-button"
              component={ButtonPageContainer}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
