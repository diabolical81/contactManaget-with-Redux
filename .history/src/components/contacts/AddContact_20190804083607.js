import React, { Component } from "react";
// import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addContacts } from "../../actions/contactActions";
import uuid from "uuid";
class AddContact extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    errors: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    // Check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }
    const newContact = {
      // id: uuid(),
      name,
      email,
      phone
    };

    this.props.addContacts(newContact);
    // Clearing the state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };
  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">
          <h5>Add Contacts</h5>
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              type="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Phone"
              name="phone"
              placeholder="Enter Phone"
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <div className="form-group">
              <input
                type="submit"
                value="Add Contact"
                className="form-control btn btn-sm btn-danger"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

AddContact.protoTypes = {
  addContacts: PropTypes.func.isRequired
};
export default connect(
  null,
  { addContacts }
)(AddContact);
