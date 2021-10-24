import UserActionTypes from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_STARTED
})


export const emailSignInStart = (email, password) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_STARTED,
    payload: { email, password }
})

export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCEED,
    payload: user
})

export const signInFailure = message => ({
    type: UserActionTypes.SIGN_IN_FAILED,
    payload: message
})

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_STARTED
})

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCEED
})

export const signOutFailure = message => ({
    type: UserActionTypes.SIGN_OUT_FAILED,
    payload: message
})

export const signUpStart = userCredentials => ({
    type: UserActionTypes.SIGN_UP_STARTED,
    payload: userCredentials
})

export const signUpSuccess = ({ user, additionalData }) => ({
    type: UserActionTypes.SIGN_UP_SUCCEED,
    payload: { user, additionalData }
})

export const signUpFailure = message => ({
    type: UserActionTypes.SIGN_UP_FAILED,
    payload: message
})