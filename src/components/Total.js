import React from 'react';
import { connect } from 'react-redux';

// STEP 2 - Connect a component and give it access to the state from Redux
// - import the connect HOC
// - build a mSTP function to access the state tree

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, {})(Total);
