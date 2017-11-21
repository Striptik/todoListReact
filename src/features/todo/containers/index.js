import { connect } from 'react-redux';
import Component from '../components';

function mapDispatchToProps(dispatch) {
  return {
    changeStateTodo: index => {
      dispatch({ type: 'CHANGE_STATE_TODO', index });
    },
    addTodo: label => {
      dispatch({ type: 'ADD_TODO', label });
    },
    updateInput: input => {
      dispatch({ type: 'UPDATE_INPUT', input });
    },
    updateFilter: filter => {
      dispatch({ type: 'SET_FILTER', filter: filter.target.value });
    },
  };
}

function mapStateToProps(state) {
  return {
    todo: { todos: state.todo.todos, inputValue: state.todo.inputTodo },
    filter: state.filter,
  };
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(Component);
export default TodoListContainer;
