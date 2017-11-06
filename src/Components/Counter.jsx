import React from 'react'
import type { CounterProps } from '../flow-typed/def';


// Wrap Element children
export default (props: CounterProps) => {
  return (
    <div>
      COUNTER : {props.counter} {props.children}
    </div>
  );
};