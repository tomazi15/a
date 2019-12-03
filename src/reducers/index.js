import loadScreenReducer from './screenReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers ({
    screen: loadScreenReducer
});

export default rootReducer;