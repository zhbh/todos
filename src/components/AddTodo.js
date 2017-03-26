import React, { findDOMNode, Component, PropTypes } from 'react';

export default class AddTodo extends Component {
  handleClick(e) {
      const node = this.refs.toDoInput;
      const inputValue = node.value;
      this.props.onAddClick(inputValue);
      node.value = '';
  }

  render() {
    return (
      <div>
        <input type="text" ref="toDoInput" />
        <button onClick={e=>this.handleClick(e)}>todo</button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
