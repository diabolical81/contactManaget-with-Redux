import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";
export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="mt-3 mb-5 text-danger lead display-4">
                Contact <span className="display-5 text-dark">List</span>
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
