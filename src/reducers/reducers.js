import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, FILTER_TYPE, FILTER } from '../actions/actions';

const initState = {
  ftype: FILTER.ALL,
  todos: []
};

function todos( state = [], action ) {
  switch (action.type) {
    case ADD_TODO:
        return [
          ...state,
          {
            text: action.text,
            id: new Date().getTime() + '',
            completed: false
          }
        ]
    case COMPLETE_TODO:
        return state.map((todo)=>{
            if(todo.id === action.id){
                todo.completed = !todo.completed;
            }

            return todo;
        })
    default:
        return state;
  }
}

function filterType(state = FILTER.ALL, action){
    if(action.ftype){
      return action.ftype
    }
    return state
}

function curState(state = initState, action){
  switch( action.type ) {
    case ADD_TODO:
      return Object.assign({},state,{ todos:[
        ...state.todos,
        {
          text: action.text,
          id: new Date().getTime(),
          completed: false
        }
      ] } )
    case COMPLETE_TODO:
      return Object.assign({},state,{ todos:state.todos.map((todo,index)=>{
         if( todo.id === action.id ) {
            todo.completed = !todo.completed;
         }
         return todo;
      })})
    case FILTER_TYPE:
      return Object.assign({},state,{
          ftype: action.ftype
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
    todos,
    filterType
})

export default todoApp
