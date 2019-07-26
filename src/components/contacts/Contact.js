import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import axios from "axios";
export default class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  onDelete = async (id, dispatch) => {
    // Just inserted try and catch blockk bcoz cant delete the added data in json cz it doesnt store the data in its database.
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };
  render() {
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i onClick={this.onShowClick} className="fas fa-sort-down" />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt text-danger ml-3 fx-3"
                    style={{ cursor: "pointer", float: "right" }}
                  />
                </Link>
                <i
                  className="fas fa-times text-danger"
                  style={{ cursor: "pointer", float: "right" }}
                  onClick={this.onDelete.bind(this, id, dispatch)}
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
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
