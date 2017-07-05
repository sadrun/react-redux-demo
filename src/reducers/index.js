import { combineReducers } from 'redux';

import bottomReducer from './bottomReducer';
import centerReducer from './centerReducer';
import headReducer from './headReducer';

const rootReducer = combineReducers({
    head: headReducer,
    bottom: bottomReducer,
    center: centerReducer
});

export default rootReducer;