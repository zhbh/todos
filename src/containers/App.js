import React, { Component } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Filter from '../components/Filter';
import { addTodo, completeTodo, filterList } from '../actions/actions';
import { connect } from 'react-redux';

class App extends Component {
  render(){
    const { addTodoDispatch, completeTodoDispatch, filterTodoDispatch, visibleTodos } = this.props;
    return (
      <div>
        <AddTodo onAddClick={text=>addTodoDispatch(text)}/>
        <TodoList todos={visibleTodos} onTodoClick={index=>completeTodoDispatch(index)} />
        <Filter onFilterType={ftype=>filterTodoDispatch(ftype)}/>
      </div>
    );
  }
}

function select(state){
  switch (state.filterType) {
    case 'ALL':
      return state.todos;
    case 'UNCOMPELE':
      return state.todos.filter(item=>!item.completed);
    case 'COMPELED':
      return state.todos.filter(item=>item.completed);
    default:
      return state.todos;
  }
}

function mapStateToProps(state) {
  return {
    visibleTodos: select(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodoDispatch: (...args) => dispatch(addTodo(...args)),
    completeTodoDispatch: (...args) => dispatch(completeTodo(...args)),
    filterTodoDispatch: (...args) => dispatch(filterList(...args))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
