import React, { Component } from 'react';

export default class Filter extends Component {
  render(){
    return (
      <ul>
        <li><a href="#" onClick={()=>this.props.onFilterType('ALL')}>ALL</a></li>
        {' '}
        <li><a href="#" onClick={()=>this.props.onFilterType('UNCOMPELE')}>UNCOMPELE</a></li>
        {' '}
        <li><a href="#" onClick={()=>this.props.onFilterType('COMPELED')}>COMPELED</a></li>
      </ul>
    )
  }
}
