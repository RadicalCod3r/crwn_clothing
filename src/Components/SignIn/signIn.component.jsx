import React from 'react';
import './signIn.style.scss';
import FormInput from  '../FormInput/formInput.component';
import CustomButton from '../CustomButton/customButton.component';
import firebase from '../../firebase/firebase.utils';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor() {
        super();
        
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span className='hint'>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='email'
                        required />
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
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
}

export default SignIn;