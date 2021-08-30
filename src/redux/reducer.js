import { combineReducers } from "redux";
// import types from './types'
import { v4 as uuidv4 } from "uuid";
import testDataContacts from "../components/data/data.json";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";

const filter = createReducer("", {
  [actions.filterChange]: (_, { payload }) => payload,
});

const contacts = createReducer([...testDataContacts], {
  [actions.formSubmitHandler]: (state, { payload }) => {
    if (
      state.find(
        contact => payload.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert(`${payload.name} is already in contacts`);
      return state;
    }

    const newContact = {
      id: uuidv4(),
      name: payload.name,
      number: payload.number,
    };

    return [...state, newContact];
  },

  [actions.onDeleteContact]: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload);
  },
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
