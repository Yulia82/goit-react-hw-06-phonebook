// import types from './types'
import { createAction } from "@reduxjs/toolkit";

// const formSubmitHandler = (data) => ({
//     type: types.ADD,
//     payload: {
//         name: data.name,
//         number: data.number,
//     },
// })

// const onDeleteContact = (id) => ({
//     type: types.DELETE,
//     payload: id,
// })

// const filterChange = (value) => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// })

export const formSubmitHandler = createAction("formSubmitHandler", data => ({
  payload: {
    name: data.name,
    number: data.number,
  },
}));

export const onDeleteContact = createAction("onDeleteContact");
export const filterChange = createAction("filterChange");

// export default { formSubmitHandler, onDeleteContact, filterChange }
