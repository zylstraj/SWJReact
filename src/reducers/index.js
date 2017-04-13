import { combineReducers } from 'redux';
import SchoolReducer from './reducer_blog';
import SelectSchool from './select_blog';

const rootReducer = combineReducers({
  schools: SchoolReducer,
  school: SelectSchool
});

export default rootReducer;
