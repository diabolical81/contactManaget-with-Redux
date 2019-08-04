import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContacts } from "../../actions/contactActions";
class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
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
  }
}

Contacts.protoTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

// To get the state
const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

// To fire off the action like Get_Contacts(getting all the contacts)
// const mapDispatchToProps = dispatch => ({
//   getContacts: () => dispatch({ type: GET_CONTACTS })
// });

export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
