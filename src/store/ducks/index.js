import { combineReducers } from 'redux';

import shoppingCart from './shoppingCart';
import user from './user'

const reducers = combineReducers({
	shoppingCart,
	user,
});

export default reducers;
