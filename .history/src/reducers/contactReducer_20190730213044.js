import { GET_CONTACTS, DELETE_CONTACTS, ADD_CONTACTS } from "../actions/types";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "DV",
      email: "vd@dvv.com",
      phone: "111-111-1111"
    },
    {
      id: 2,
      name: "VDV",
      email: "vdv@dvdv.com",
      phone: "456-567-4567"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state
      };
    case DELETE_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACTS:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
}
