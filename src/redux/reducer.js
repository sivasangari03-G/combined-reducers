import { combineReducers } from 'redux'
import { authReducer } from './AuthRedux/auth.reducer';
import { counterReducer } from './counterRedux/counter.reducer'
import { todoReducer } from './todoRedux/todo.reducer';

export default combineReducers({
	counter: counterReducer,
	todo: todoReducer,
	auth: authReducer,
});
