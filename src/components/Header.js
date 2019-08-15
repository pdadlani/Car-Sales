import React from 'react';
import { connect } from 'react-redux';

// STEP 2 - Connect a component and give it access to the state from Redux
// - import the connect HOC
// - build a mSTP function to access the state tree

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  console.log('header state', state);
  return {
    car: state.car
  };
};

export default connect(mapStateToProps, {})(Header);
