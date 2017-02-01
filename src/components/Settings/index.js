import React, { Component } from 'react';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state={
      cityInput: ''
    }
  }
  render() {
    const { text, handleClick } = this.props;
    const { cityInput } = this.state;
    console.log('text props', text)
    return (
      <div>
        <h2>Settings</h2>
        <input
          value={this.state.cityInput}
          onChange={ (e)=> this.setState({ cityInput: e.target.value })}
          placeholder='Enter a city'
        />
        <button
          onClick={ () => handleClick(cityInput) }
        >BUTTON</button>
        <div>{text}</div>
      </div>
    )
  }
}
