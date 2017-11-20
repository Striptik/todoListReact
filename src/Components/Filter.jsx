// @flow

import * as React from 'react';
import { FilterTodoProps } from '../flow-typed/def';

export default (props: FilterTodoProps) => {
  return (
    <div className="TodoFilters" style={{ marginTop: 100 }}>
      <label>
        Filter task :
        <select value={props.filter} onChange={props.changeFilter}>
          <option value="none">None</option>
          <option value="completed">Completed</option>
          <option value="inprogress">In progress</option>
        </select>
      </label>
    </div>
  );
};
