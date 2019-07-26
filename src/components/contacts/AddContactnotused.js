import React, { Component } from "react";

export default class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      phone: this.phoneInput.current.value,
      email: this.emailInput.current.value
    };

    console.log(contact);
  };

  static defaultProps = {
    name: "Vd",
    email: "vd@vdv.com",
    phone: "4567456745"
  };
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">
          <h5>Add Contacts</h5>
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Name"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Enter Email"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Enter Phone"
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
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
