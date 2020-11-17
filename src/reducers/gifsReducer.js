// TODO: Import the `RECEIVE_GIFS` constant

import { RECEIVE_GIFS } from "../actions/gifActions";

const gifsReducer = (state = [], action) => {
  // console.log(action.gifs)
  switch (action.type) {
    // TODO: Return the GIFs from the action object if the action type is `RECEIVE_GIFS`
    case RECEIVE_GIFS:
      console.log('reducer', [...action.gifs])
      return [...action.gifs]
    // TODO: Return the previous state by default
    default:
      return state
  }
};

export default gifsReducer;
