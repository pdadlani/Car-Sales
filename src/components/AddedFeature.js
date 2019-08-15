import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/index.js';

// step 2.5. Add events and event handlers in UI 

const AddedFeature = props => {

  console.log('addedFeature props', props);

  const remove = event => {
    event.preventDefault();
    props.removeFeature(props.feature);
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
        className="button"
        onClick={remove}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

// export default AddedFeature;


const mapStateToProps = state => {
  return {
    car: state.car
  };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);