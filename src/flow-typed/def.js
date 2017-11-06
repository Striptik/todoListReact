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

export type AppState = {
  //count: number
  todos: Array<Object>,
  loading: boolean,
  filter: string,
  errorMsg: string,
};

export type TodoListProps = {
  errorHandler: Function,
  filter: string,
  todos: Array<Object>
};

export type TodoListState = {
  input: string,
  todos: Array<Object>,
  filter: string,
};


