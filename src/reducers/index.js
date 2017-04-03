import { combineReducers } from 'redux';
import BlogReducer from './reducer_blog';

const rootReducer = combineReducers({
  blogs: BlogReducer
});

export default rootReducer;
