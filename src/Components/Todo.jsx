// @flow

import * as React from 'react';
import { TodoProps } from '../flow-typed/def';

const styleCompleted = {
  listStyle: 'none',
  fontSize: 25,
  textDecorationLine: 'line-through',
};
const styleInProgress = {
  listStyle: 'none',
  fontSize: 25,
};

export default (props: TodoProps) => {
  const style = props.todo.complete ? styleCompleted : styleInProgress;
  return (
    <li
      key={props.index}
      onClick={props.changeState}
      style={style}
    >
      {props.todo.label}
    </li>
  );
};
    



