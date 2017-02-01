import React from 'react';
import { Link } from 'react-router';
// import { connect } from 'react-redux';

const PinContainer = () => {
  return (
    <div>
      <h2>PinContainer</h2>
      <button><Link to='/settings'>Edit Pinned Cities</Link></button>
    </div>
  )
}

export default PinContainer;
