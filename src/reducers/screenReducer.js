import { LOAD_SCREEN } from '../actions';

const loadScreenReducer = (state= true, action ) => {
    switch (action.type) {
        case LOAD_SCREEN:
            return state = action.screen
        default:
            return state
    }
}

export default loadScreenReducer;