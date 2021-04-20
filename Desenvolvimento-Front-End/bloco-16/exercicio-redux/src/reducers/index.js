import { combineReducers } from 'redux';
import reducerAddTask from './reducerAddTask';

const rootReducers = combineReducers({
  reducerAddTask,
});

export default rootReducers;
