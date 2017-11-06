// @flow
import React from 'react';
import type { HelloProps } from '../flow-typed/def';

export default (props: HelloProps) => {
  return (
    <div>
      <div>Hello {props.name}</div>
      <p>Number of YO! : {props.value}</p>
    </div>
  );
};