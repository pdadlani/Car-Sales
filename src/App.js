import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
  // state is moved to reducer.js

  // actions moved to actions/index.js

  return (
    <div className="boxes">
      <div className="box">
        {/* following commented out components gets replaced when completing step 2 - connecting a component and giving it access to the state from redux */}
        {/* <Header car={state.car} /> */}
        <Header />
        {/* <AddedFeatures car={state.car} /> */}
        <AddedFeatures />
      </div>
      <div className="box">
        {/* <AdditionalFeatures store={state.store} /> */}
        <AdditionalFeatures />
        {/* <Total car={state.car} additionalPrice={state.additionalPrice} /> */}
        <Total />
      </div>
    </div>
  );
};

export default App;
