import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getContact, updateContact } from "../../actions/contactActions";
// import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";
class EditContact extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { name, phone, email } = nextProps.contact;
    this.setState({
      name,
      email,
      phone
    });
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    console.log("it comes here");
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

    const { id } = this.props.match.params;

    const updateContact = {
      id,
      name,
      email,
      phone
    };

    this.props.updateContact(updateContact);
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
          <h5>Edit Contact</h5>
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
                value="Edit Contact"
                className="form-control btn btn-sm btn-danger"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contact: state.contact.contact
});

export default connect(
  mapStateToProps,
  { getContact, updateContact }
)(EditContact);
