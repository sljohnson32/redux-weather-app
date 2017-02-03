import React, { Component } from 'react';

export default class Settings extends Component {

  render() {
    const { data } = this.props;
    return (
      <div>
        <button>X</button>
        <h4>{data.fullName}</h4>
      </div>
    )
  }
}
