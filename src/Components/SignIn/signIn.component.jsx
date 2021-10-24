import React, { useState } from 'react';
import './signIn.style.scss';
import FormInput from '../FormInput/formInput.component';
import CustomButton from '../CustomButton/customButton.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action'
import { connect } from 'react-redux';

const SignIn = ({ signInWithGoogle, signInWithEmail }) => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    })

    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        signInWithEmail(email, password);
    }

    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span className='hint'>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    handleChange={handleChange}
                    label='email'
                    required />
                <FormInput 
                    type="password" 
                    name="password" 
                    value={password} 
                    handleChange={handleChange}
                    label='password'
                    required />
                <div className="buttons">
                    <CustomButton type="submit"> SIGN IN </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> SIGN IN WITH GOOGLE</CustomButton>
                </div>    
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    signInWithGoogle: () => dispatch(googleSignInStart()),
    signInWithEmail: (email, password) => dispatch(emailSignInStart(email, password))
})

export default connect(null, mapDispatchToProps)(SignIn);