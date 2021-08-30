import { combineReducers } from "redux";
// import types from './types'
import { v4 as uuidv4 } from "uuid";
import testDataContacts from "../components/data/data.json";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";

function formSubmitHandler(state, data) {
  if (
    state.find(
      contact => data.name.toLowerCase() === contact.name.toLowerCase(),
    )
  ) {
    alert(`${data.name} is already in contacts`);
    return state;
  }

  const newContact = {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  };

  return [...state, newContact];
}

function deleteContact(state, idContact) {
  return state.filter(contact => contact.id !== idContact);
}

const contacts = createReducer([...testDataContacts], {
  [actions.formSubmitHandler]: (state, { payload }) =>
    formSubmitHandler(state, payload),
  [actions.onDeleteContact]: (state, { payload }) =>
    deleteContact(state, payload),
});

const filter = createReducer("", {
  [actions.filterChange]: (_, { payload }) => payload,
});

// const contacts = (state = [...testDataContacts], { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             if (state.find(contact => payload.name.toLowerCase() === contact.name.toLowerCase(),)) {
//                 alert(`${payload.name} is already in contacts`);
//                 return state;
//             }

//             const newContact = {
//                 id: uuidv4(),
//                 name: payload.name,
//                 number: payload.number,
//             };

//             return [ ...state, newContact ];

//         case types.DELETE:
//             return (state.filter(contact => contact.id !== payload))

//         default:
//             return state;
//     };
// };

// const filter = (state = '', {type, payload}) => {
//     switch (type) {
//         case types.CHANGE_FILTER:
//             return payload;

//         default:
//             return state;
//     };
// };

export default combineReducers({
  contacts,
  filter,
});
