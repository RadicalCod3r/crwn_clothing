import UserActionTypes from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (currentState = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SIGN_UP_SUCCEED:
        case UserActionTypes.SIGN_IN_SUCCEED:    
            return {
                ...currentState,
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.SIGN_OUT_SUCCEED:
            return {
                ...currentState,
                currentUser: null,
                error: null
            }
        case UserActionTypes.SIGN_UP_FAILED:
        case UserActionTypes.SIGN_OUT_FAILED:    
        case UserActionTypes.SIGN_IN_FAILED:
            return {
                ...currentState,
                error: action.payload
            }  
        default:
            return currentState;    
    }
};

export default userReducer;