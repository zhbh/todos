import React, { Component, PropTypes } from 'react';
import Todo from '../components/Todo';

export default class TodoList extends Component {

  render(){
    return (
      <ul>
        {this.props.todos.map((todo,index)=>{
          return <Todo {...todo} key={index} onClick={()=>this.props.onTodoClick(todo.id)} />
        })}
      </ul>
    );
  }
}

TodoList.propTypes = {
  //  todos: PropTypes.arrayOf(PropTypes.shape({
  //    text: PropTypes.string.isRequired,
  //  }).isRequired).isRequired
};
