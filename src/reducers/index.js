import { ADD, REMOVE } from '../actions/index.js';

// export 2 things - initialState & reducer function

// step 0.

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  store: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

// step 4. write the reducer logic for the actions.

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case REMOVE:
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car, 
          features: state.car.features.filter(item => item.id !== action.payload.id)
        } 
    }
    case ADD:
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        }
      }
    default:
      return state;
  }
}