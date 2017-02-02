import React, { Component } from 'react';
import './settings-style.css'

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state= {
      cityInput: ''
    }
  }
  render() {
    const { text, handleClick } = this.props;
    const { cityInput } = this.state;
    console.log('text props', text)
    return (
      <div>
        <p className='settings-p-tag'>Settings</p>
        <div className='container'>
        <input
          value={this.state.cityInput}
          onChange={ (e)=> this.setState({ cityInput: e.target.value })}
          placeholder='Enter a city'
        />
        <button
          className='search-btn'
          onClick={ () => handleClick(cityInput) }
        >BUTTON</button>
        <div>{text}</div>
      </div>
      </div>
    )
  }
}
