import { type Node } from 'react';

export type ClockState = {
  hours: number,
  minutes: number,
  seconds: number,
  interval: number
};

export type ClockProps = {
  interval: number,
};

export type HelloProps = {
  name?: string,
  value: number,
};

export type CounterProps = {
  counter: number,
  children: Node,
};

export type TodoType = {
  label: string,
  complete: Boolean,
};

export type AppState = {
  //count: number
  todos: Array<TodoType>,
  filter: string,
  loading: Boolean,
};

export type TodoListProps = {
  filter: string,
  todos: Array<TodoType>,
};

export type TodoListState = {
  input: string,
  todos: Array<TodoType>,
  filter: string,
};

export type TodoProps = {
  todo: TodoType,
  index: number,
  changeState: Function,
}

export type InputTodoProps = {
  inputValue: string,
  saveTyping: Function,
  addTodo: Function,
};

export type FilterTodoProps = {
  filter: string,
  changeFilter: Function,
};