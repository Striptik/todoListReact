// @flow

import type { TodoType } from '../../flow-typed/def';

const todos: Array<TodoType> = [
  { label: 'Learn Javascript', complete: true },
  { label: 'Learn ES6', complete: true, },
  { label: 'Learn React', complete: false },
  { label: 'Learn React Native', complete: false, },
  { label: 'Learn Nodejs', complete: false },
  { label: 'Learn by doing', complete: false, },
  { label: 'Learn to teach', complete: false },
  { label: 'Teach to learn', complete: false },
];

const inputTodo: string = '';

const todosReducer: Function = (state: Object = { todos, inputTodo } , action: Object) : Object => {
  switch (action.type) {
    case 'ADD_TODO':
      const addTodo: Array<TodoType> = state.todos.concat();
      addTodo.unshift({
        label: state.inputTodo,
        complete: false,
      });
      return { todos: addTodo, inputTodo: '' };
      
    case 'CHANGE_STATE_TODO':
      const tmpTodo: Array<TodoType> = state.todos.concat();
      tmpTodo[action.index].complete = !tmpTodo[action.index].complete;
      return { todos: tmpTodo, inputTodo: state.inputTodo };
      
    case 'UPDATE_INPUT':
      return { todos: state.todos, inputTodo: action.input.currentTarget.value };
    
    default:
      return state;
  }
};

export default todosReducer;