import { GET_CONTACTS, DELETE_CONTACTS, ADD_CONTACTS } from "./types";
import axios from "axios";
export const getContacts = () => async dispatch => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const deleteContacts = id => async dispatch => {
  const res = await axios.delete(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  console.log(res);
  dispatch({
    type: DELETE_CONTACTS,
    payload: id
  });
};

export const addContacts = contact => async dispatch => {
  const res = await axios.post(
    `https://jsonplaceholder.typicode.com/users`,
    contact
  );
  dispatch({
    type: ADD_CONTACTS,
    payload: res.data
  });
};
