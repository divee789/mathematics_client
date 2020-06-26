import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/react-hooks";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import "./index.scss";
import App from "./App";
import graphqlApi from "./services/graphqlApis";
import * as serviceWorker from "./serviceWorker";

//Reducers
import authReducer from "./store/reducers/auth";
import courseReducer from "./store/reducers/course";

const { client } = new graphqlApi();

const rootReducer = combineReducers({
  auth: authReducer,
  course: courseReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

let composeEnhancers;
let options;
let middlewares;

// if (process.env.REACT_APP_NODE_ENV === "development") {
composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
middlewares = [logger, thunk];
options = composeEnhancers(applyMiddleware(...middlewares));
// } else {
//   middlewares = [thunk];
//   options = applyMiddleware(...middlewares);
// }
const store = createStore(rootReducer, options);

const app = (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
