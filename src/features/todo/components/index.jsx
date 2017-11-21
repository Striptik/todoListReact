// @flow

import * as React from 'react';
import { Component } from 'react';

import { TodoListProps, TodoListState } from '../../../flow-typed/def';

import Todo from './Todo';
import InputTodo from './InputTodo'
import Filter from './Filter'

class TodoList extends Component<TodoListProps, TodoListState> {

  constructor() {
    super();
    
  }
  
  render() {
    return (
        <div>
          <h1 style={{ fontSize: 50 }}>TODOLIST</h1>
          
          {/* INPUT */}
          <InputTodo
            inputValue={this.props.todo.inputValue}
            saveTyping={this.props.updateInput.bind(this)}
            addTodo={this.props.addTodo.bind(this)}
          />
    
          {/* TODO LIST */}
          <div className="todoList">
            <ul style={{ paddingRight: 50 }}>
              {this.props.todo.todos.map((todo, i) => {
          
                if (todo.complete && this.props.filter === 'inprogress') return null;
                if (!todo.complete && this.props.filter === 'completed') return null;
                return (
                  <Todo
                    key={i}
                    index={i}
                    todo={todo}
                    changeState={this.props.changeStateTodo.bind(this, i)}
                  />
                );
              })}
            </ul>
          </div>
    
          {/* Filter */}
          <Filter
            filter={this.props.filter}
            changeFilter={this.props.updateFilter}
          />
        </div>
    );
  }
  
}

export default TodoList;