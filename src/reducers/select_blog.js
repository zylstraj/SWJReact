import { SELECT_BLOG } from '../actions/index';

export default function(state=null, action) {
  switch(action.type) {
    case SELECT_BLOG:
    return action.payload
  }
  return state;
}
