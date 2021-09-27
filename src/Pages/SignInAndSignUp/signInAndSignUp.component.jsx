import React from 'react';
import './signInAndSignUp.style.scss';
import SignIn from '../../Components/SignIn/signIn.component';
import SignUp from '../../Components/SignUp/signUp.component';

const SignInAndSignUp = () => (  
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>  
);

export default SignInAndSignUp;