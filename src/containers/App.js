import React, { Component } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import { addTodo } from '../actions/actions';
import { connect } from 'react-redux';

class App extends Component {
  render(){
    const { dispatch, visibleTodos } = this.props;
    return (
      <div>
        <AddTodo onAddClick={text =>
          dispatch(addTodo(text))
        }/>
        <TodoList todos={visibleTodos} />
      </div>
    );
  }
}

function curState(state){
  return {
    visibleTodos: state.todos
  }
}

export default connect(curState)(App)
