// @flow

import React from 'react';
import { Provider } from 'react-redux';

import Clock from './Components/Clock';
import TodoList from './features/todo';

import store from './redux/store';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        {/*CLOCK*/}
        <Clock interval={1000} />
        {/*TodoList*/}
        <TodoList />
      </div>
    </Provider>
  );
};
export default App;