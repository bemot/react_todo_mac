import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import Header from "./layout/Header";
import DashboardAuthors from "./todos/DashboardAuthors";
import DashboardTodos from "./todos/DashboardTodos";
import TodoDelete from "./todos/TodoDelete";
import TodoEdit from "./todos/TodoEdit";
import MainPage from "./todos/MainPage";

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
            <Route exact path="/" component={MainPage} />
            <Route exact path="/todos" component={DashboardTodos} />
            <Route exact path="/todos/delete/:id" component={TodoDelete} />
            <Route exact path="/todos/edit/:id" component={TodoEdit} />
            <Route exact path="/authors" component={DashboardAuthors} />
            <Route exact path="/authors/delete/:id" component={AuthorDelete} />
            <Route exact path="/authors/edit/:id" component={AuthorEdit} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
