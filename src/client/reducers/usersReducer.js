import { FETCH_USERS } from './../actions';

export default (state = [], action) => {
  switch (action.payload.data) {
    case FETCH_USERS:
      return action.payload.data;

    default:
      return state;
  }
};
