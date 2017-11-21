// @flow

const filters: Function = (state: string = 'none', action: Object): string => {
  if (action.type === 'SET_FILTER') {
    return action.filter;
  } else {
    return state;
  }
};

export default filters;