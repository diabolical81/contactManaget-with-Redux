// import logo from "./logo.svg";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import About from "./components/pages/about";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";
import notFound from "./components/pages/notFound";
import EditContact from "./components/contacts/EditContact";
// import "./App.css";
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager App" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={notFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
