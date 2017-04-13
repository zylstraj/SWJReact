import { SELECT_SCHOOL } from '../actions/index';

export default function(state=null, action) {
  switch(action.type) {
    case SELECT_SCHOOL:
    return action.payload
  }
  return state;
}
