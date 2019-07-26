import React, { Component } from "react";
import Axios from "axios";
// import axios from "axios";
// when making context u gotta use the below function.
const Context = React.createContext();

// To create method like delete and update and all that we will use reducer and declare it like below.

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    contacts: [
      // {
      //   id: 1,
      //   name: "VdV",
      //   email: "vd@v.com",
      //   phone: "0000000000"
      // },
      // {
      //   id: 2,
      //   name: "VdVdV",
      //   email: "vd@vdv.com",
      //   phone: "4567456745"
      // }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(users => {
      this.setState({
        contacts: users.data
      });
    });
  }

  render() {
    return (
      // This context.provider is like a provider which provides the value to the consumer....so we gotta pass the value to provider so wherever the value is needed consumer can request it through context and use it
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

// We gotta export consumer from here to let the other components use the data provided by provider via consumer.
export const Consumer = Context.Consumer;

// Just wrap the whole app.js in provider tag to use context.
// And then the component in which the data is needed just wrap it under consumer tag and it will be able to access all the data.
// through value.
