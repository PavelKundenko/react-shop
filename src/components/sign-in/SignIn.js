import React, {Component} from 'react';

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';
import {ButtonsContainer, SignInStyled, Title} from "./SignIn.styles";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const {value, name} = event.target;

    this.setState({ [name]: value })
  };

  render() {
  return (
   <SignInStyled>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>

     <form onSubmit={this.handleSubmit}>
       <FormInput
         name='email'
         type='email'
         value={this.state.email}
         handleChange={this.handleChange}
         label='email'
       />
       <FormInput
         name='password'
         type='password'
         value={this.state.password}
         handleChange={this.handleChange}
         label='password'
       />
       <ButtonsContainer>
         <CustomButton type="submit">Sign In</CustomButton>
         <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign in wit Google</CustomButton>
       </ButtonsContainer>
     </form>
   </SignInStyled>
  );
 }
}

export default SignIn;
