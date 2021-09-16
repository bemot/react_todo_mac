import React, { Component } from "react";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

class DashboardTodos extends Component {
  render() {
    return (
      <div className="ui container">
        <TodoCreate />
        <TodoList />
      </div>
    );
  }
}

export default DashboardTodos;
