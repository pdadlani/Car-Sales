// step 2.3.create action types in actions / index.js.

export const REMOVE = 'REMOVE';

export const ADD = 'ADD';


// STEP 3 - build an action creator for any event that might happen in your app that should cause your state to be updated

export const removeFeature = item => {
  console.log('remove item', item);
  // dispatch an action here to remove an item
  return { type: REMOVE, payload: item };
};

export const buyItem = item => {
  console.log('add item', item);
  // dipsatch an action here to add an item
  return { type: ADD, payload: item };
};