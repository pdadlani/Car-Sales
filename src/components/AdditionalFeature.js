import React from 'react';

// step 2.5. Add events and event handlers in UI 

const AdditionalFeature = props => {

  const add = event => {
    event.preventDefault();
    props.buyItem(props.feature);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button"
        onClick={add}
      >
          Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;

