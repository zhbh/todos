export const ADD_TODO = 'ADD_TODO';

export function addTodo(text){
  return { type: ADD_TODO, text };
}

export const COMPLETE_TODO = 'COMPLETE_TODO';

export function completeTodo( id ) {
  return { type: COMPLETE_TODO, id };
}

export const FILTER_TYPE = 'FILTER_TYPE';

export function filterList( ftype ) {
  return { type: FILTER_TYPE, ftype };
}

export const FILTER = {
  ALL: 'ALL',
  UNCOMPELE: 'UNCOMPELE',
  COMPELED: 'COMPELED'
};
