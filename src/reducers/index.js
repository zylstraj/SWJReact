import { combineReducers } from 'redux';
import BlogReducer from './reducer_blog';
import SelectBlog from './select_blog';

const rootReducer = combineReducers({
  blogs: BlogReducer,
  blog: SelectBlog
});

export default rootReducer;