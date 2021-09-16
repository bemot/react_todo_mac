import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import Header from "./layout/Header";
import DashboardAuthors from "./todos/DashboardAuthors";
import DashboardTodos from "./todos/DashboardTodos";
import TodoDelete from "./todos/TodoDelete";
import TodoEdit from "./todos/TodoEdit";

import AuthorDelete from "./todos/AuthorDelete";
import AuthorEdit from "./todos/AuthorEdit";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path="/" component={DashboardTodos} />
            <Route exact path="/delete/:id" component={TodoDelete} />
            <Route exact path="/edit/:id" component={TodoEdit} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
