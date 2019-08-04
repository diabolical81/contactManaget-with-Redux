import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getContact } from "../../actions/contactActions";
// import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";
class EditContact extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    errors: {}
  };

  async componentDidMount() {
    // const { id } = this.props.match.params;
    // this.setState({
    //   name: res.data.name,
    //   email: res.data.email,
    //   phone: res.data.phone
    // });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (dispatch, e) => {
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

    // const updateContact = {
    //   name,
    //   email,
    //   phone
    // };

    // const { id } = this.props.match.params;

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
          <form>
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

const mapStateToProps = state => ({
  contact: state.contact.contact
});

export default connect()(EditContact);
