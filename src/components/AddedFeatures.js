import React from 'react';
import { connect } from 'react-redux';

import { removeFeature } from '../actions/index.js';
import AddedFeature from './AddedFeature';

// STEP 2 - Connect a component and give it access to the state from Redux
// - import the connect HOC
// - build a mSTP function to access the state tree

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeatures);
