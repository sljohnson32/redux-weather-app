import React from 'react';
import { Link } from 'react-router';
import './pinbox-style.css'
// import { connect } from 'react-redux';

const PinBox = () => {
  return (
    <div className='pinbox-container'>
      <p className='pinbox-title'>Favorites</p>
      <div className='card-container'>
        <div className='one'></div>
        <div className='two'></div>
        <div className='three'></div>
        <button className='edit-btn'><Link to='/settings'>Edit Pinned Cities</Link></button>
      </div>
    </div>
  )
}

export default PinBox;
