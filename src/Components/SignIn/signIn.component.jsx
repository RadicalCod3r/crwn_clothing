import React from 'react';
import './signIn.style.scss';
import FormInput from  '../FormInput/formInput.component';
import CustomButton from '../CustomButton/customButton.component';
import auth, { signInWithGoogle } from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { withRouter } from 'react-router-dom';

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
        const { history } = this.props;

        signInWithEmailAndPassword(auth, this.state.email, this.state.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                this.setState({ email: '', password: '' }, () => {
                    history.push('/');
                });
            })
            .catch((error) => {
                console.log(error);
            });
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

export default withRouter(SignIn);