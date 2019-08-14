import React from 'react';
import { connect } from 'react-redux';

import { buyItem } from '../actions/index.js';
import AdditionalFeature from './AdditionalFeature';

// STEP 2 - Connect a component and give it access to the state from Redux
// - import the connect HOC
// - build a mSTP function to access the state tree

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    store: state.store
  };
};

export default connect(mapStateToProps, { buyItem })(AdditionalFeatures);
