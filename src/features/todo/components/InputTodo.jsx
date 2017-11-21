// @flow

import * as React from 'react';
import { InputTodoProps } from '../../../flow-typed/def';

export default (props: InputTodoProps) => {
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
        onChange={props.saveTyping}
        value={props.inputValue}
      />
      <input
        className="addTodo_button"
        type="button"
        value="Add"
        onClick={props.addTodo}
      />
    </div>
  );
};
