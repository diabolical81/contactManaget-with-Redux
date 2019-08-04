import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteContacts } from "../../actions/contactActions";
class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  onDelete = id => {
    this.props.deleteContacts(id);
  };
  render() {
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name} <i onClick={this.onShowClick} className="fas fa-sort-down" />
          <Link to={`contact/edit/${id}`}>
            <i
              className="fas fa-pencil-alt text-danger ml-3 fx-3"
              style={{ cursor: "pointer", float: "right" }}
            />
          </Link>
          <i
            className="fas fa-times text-danger"
            style={{ cursor: "pointer", float: "right" }}
            onClick={this.onDelete.bind(this, id)}
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContacts: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteContacts }
)(Contact);
