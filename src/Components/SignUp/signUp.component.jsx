import React, { useState } from 'react';
import FormInput from '../FormInput/formInput.component';
import './signUp.style.scss';
import CustomButton from '../CustomButton/customButton.component';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.action';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('Passwords dont match!');
            return;
        }

        signUpStart({ email, password, displayName });
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    }

    return(
        <div className="sign-up">
            <h2>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit} className="sign-up-form">
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>   
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);