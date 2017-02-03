import React, { Component } from 'react';

export default class Settings extends Component {

  render() {
    const { data, pinID, removePin } = this.props;
    console.log(data, pinID)
    return (
      <div>
        <button
          onClick={ () => removePin(pinID) }
        >x</button>
        <h4>{data.fullName}</h4>
      </div>
    )
  }
}
