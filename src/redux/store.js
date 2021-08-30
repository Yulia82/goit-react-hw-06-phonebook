// import { createStore, combineReducers } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from "./reducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// const rootReducer = combineReducers({
//     fhonebook: reducer,
// })

// const store = createStore(rootReducer, composeWithDevTools());

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

// --------localStorage
// const rootReducer = combineReducers({
//     fhonebook: persistReducer(persistConfig, reducer),
//     },
// )
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// ----------------------------

export const store = configureStore({
  reducer: persistReducer(persistConfig, reducer),
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

// export default { store};
