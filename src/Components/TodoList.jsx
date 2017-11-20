// @flow

import * as React from 'react';
import { Component } from 'react';


import { TodoListProps, TodoListState } from '../flow-typed/def';
import Todo from './Todo';
import InputTodo from './InputTodo'
import Filter from './Filter'

class TodoList extends Component<TodoListProps, TodoListState> {
  //# Flow needs
  saveTyping: Function;
  addTodo: Function;
  changeStateTodo: Function;
  changeFilter: Function;
  
  constructor(props: TodoListProps) {
    super(props);
    
    //this.saveTyping = this.saveTyping.bind(this);
    //this.addTodo = this.addTodo.bind(this);
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
      todos: [ newTodo, ...this.state.todos ],
    });
  }
  
  //# Change the todos state when catch click on <li>
  changeStateTodo(index: number) {
    //# Retrieve Todos and copy to new array
    let todos = this.state.todos;
    //# Change the value of the good todo
    todos[ index ].complete = !todos[ index ].complete;
    //# Replace the todos with right state
    this.setState({
      todos,
    });
  }
  
  changeFilter(e: SyntheticEvent<HTMLSelectElement>) {
    let filter = e.currentTarget.value;
    this.setState({
      filter,
    });
  }
  
  render() {
    return (
      <div>
        <h1 style={{ fontSize: 50 }}>TODOLIST</h1>
          {/* INPUT */}
          <InputTodo
            inputValue={this.state.input}
            saveTyping={this.saveTyping.bind(this)}
            addTodo={this.addTodo.bind(this)}
          />
        
          {/* TODO LIST */}
          <div className="todoList">
            <ul style={{ paddingRight: 50 }}>
              {this.state.todos.map((todo, i) => {
          
                if (todo.complete && this.state.filter === 'inprogress') return null;
                if (!todo.complete && this.state.filter === 'completed') return null;
                return (
                  <Todo
                    todo={todo}
                    index={i}
                    changeState={this.changeStateTodo.bind(this, i)}
                  />
                );
              })}
            </ul>
          </div>
         
          {/* Filter */}
          <Filter
            filter={this.state.filter}
            changeFilter={this.changeFilter.bind(this)}
          />
      </div>
    );
  }
  
}

export default TodoList;