// @flow

import * as React from 'react';
import { Component } from 'react';
import { TodoListProps, TodoListState } from '../flow-typed/def';


class TodoList extends Component<TodoListProps, TodoListState> {
  //# Flow needs
  saveTyping: Function;
  addTodo: Function;
  changeStateTodo: Function;
  changeFilter: Function;
  
  constructor(props: TodoListProps) {
    super(props);
    
    this.saveTyping = this.saveTyping.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    //this.changeStateTodo = this.changeStateTodo.bind(this);
    
    this.state = {
      input: '',
      todos: this.props.todos,
      filter: this.props.filter,
    };
  }
  
  //# Keep the input changes to reassign the value
  //# => input is a control field
  saveTyping(e: SyntheticEvent<HTMLInputElement>) {
    this.setState({ input: e.currentTarget.value });
  }
  
  //# Add new todo when clicking the button
  addTodo(e: SyntheticEvent<HTMLInputElement>) {
    e.preventDefault();
    //# Create the new elem for todos array
    let newTodo: Object = { label: this.state.input, complete: false };
    //# Add it to the todoList
    this.setState({
      input: '',
      todos: [ ...this.state.todos, newTodo ],
    });
  }
  
  //# Change the todos state when catch click on <li>
  changeStateTodo (index: number) {
    //# Retrieve Todos and copy to new array
    let todos = this.state.todos;
    //# Change the value of the good todo
    todos[index].complete = !todos[index].complete;
    //# Replace the todos with right state
    this.setState({
      todos
    });
  }
  
  changeFilter (e: SyntheticEvent<HTMLSelectElement>) {
  let filter = e.currentTarget.value;
    this.setState({
      filter
    });
  }
  
  //# Method to render the input
  renderInput() {

    return (
      <div
        className="addTodo"
        style={{ marginBottom: 70, marginTop: 50 }}
      >
        <p>Something to do today ?</p>
        <input
          className="addTodo_input"
          type="text"
          placeholder="New task..."
          onChange={this.saveTyping}
          value={this.state.input}
        />
        <input
          className="addTodo_button"
          type="button"
          value="Add"
          onClick={this.addTodo}
        />
      </div>
    );
  }
  
  //# Method to render the todoList
  renderTodoList() {
    
    return (
      <div className="todoList">
        <ul style={{
          paddingRight: 50,
        }}>
          {/*Check filter*/}
          {this.state.todos.map((todo, i) => {
            switch (this.state.filter) {
              // Display all the todos
              case 'none':
                return (
                  <li
                    key={i}
                    onClick={this.changeStateTodo.bind(this, i)}
                    style={{ listStyle: 'none', fontSize: 25 }}
                  >
                    {
                      todo.complete ?
                        <s>{todo.label}</s>
                        :
                        todo.label
                    }
                  </li>
                );
              // display only completed todos
              case 'completed':
                return (
                  todo.complete ?
                  <li
                    key={i}
                    onClick={this.changeStateTodo.bind(this, i)}
                    style={{ listStyle: 'none', fontSize: 25 }}
                  >
                    <s>{todo.label}</s>
                  </li>
                    :
                    null
                );
              // display only in progress todos
              case 'inprogress':
                return (
                  todo.complete ?
                    null
                    :
                    <li
                      key={i}
                      onClick={this.changeStateTodo.bind(this, i)}
                      style={{ listStyle: 'none', fontSize: 25 }}
                    >
                      {todo.label}
                    </li>
                );
            }
            
          })}
        </ul>
      </div>
    );
  }
  
  renderFilters () {
    return (
      <div className="TodoFilters" style={{ marginTop: 100}}>
        <label>
          Filters task :
          <select value={this.state.filter} onChange={this.changeFilter}>
            <option value="none">None</option>
            <option value="completed">Completed</option>
            <option value="inprogress">In progress</option>
          </select>
        </label>
      </div>
    );
  }
  
  render() {
    return (
      <div>
        <h1 style={{ fontSize: 50 }}>TODOLIST</h1>
        {/* input */}
        {
          this.renderInput()
        }
        
        {/*list of todos*/}
        {
          this.renderTodoList()
        }
        
        {/* filters */}
        {
          this.renderFilters()
        }
      </div>
    );
  }
  
}

export default TodoList;