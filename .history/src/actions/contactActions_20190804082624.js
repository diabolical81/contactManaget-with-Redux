import { GET_CONTACTS, DELETE_CONTACTS, ADD_CONTACTS } from "./types";

export const getContacts = () => dispatch => {
  dispatch({
    type: GET_CONTACTS
  });
};

export const deleteContacts = id => {
  return {
    type: DELETE_CONTACTS,
    payload: id
  };
};

export const addContacts = contact => {
  return {
    type: ADD_CONTACTS,
    payload: contact
  };
};
