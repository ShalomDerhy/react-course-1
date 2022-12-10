import React, { useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';


//Reducer functions - always outside of the component function
//we do that because we dont need any data thats generated inside of the component function
//all the data that we will use in those functions will be passed into those function when they executed by React
const emailReducer = (lastState , action) => {
  if(action.type == 'userInput') {
    return {value:action.val, isValid: action.val.includes('@')}
  }
  if(action.type == 'emailValid') {
    return {value: lastState.value, isValid: lastState.value.includes('@') }
  }
  return {value:'', isValid: false}
  //we returning a new state argument
  //if the we didnt entered the if statement, we returned a defualt state
}

const passwordReducer = (lastState , action) => {
  if(action.type == 'userInput') {
    return {value:action.val, isValid: action.val.trim().length > 6}
  }
  if(action.type == 'passwordValid') {
    return {value: lastState.value, isValid: lastState.value.trim().length > 6 }
  }
  return {value:'', isValid: false}
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState,dispatchEmail] = React.useReducer(
    // the set states function
    emailReducer, 
    // the first values that entered to the state 
    {value: '', isValid: undefined})


  const [passwordState,dispatchPassword] = React.useReducer(passwordReducer, {value: '', isValid : undefined})


  const {isValid : emailIsValid} = emailState
  const {isValid : passwordIsValid} = passwordState

  React.useEffect(()=> {
    const handler = setTimeout(()=> {
      setFormIsValid(
          emailIsValid&& passwordIsValid
      );},500)
      return () => {
        clearTimeout(handler)
      }
      
      },[emailIsValid ,passwordIsValid])

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type: 'userInput', val: event.target.value})

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type: 'userInput', val: event.target.value})


    // setFormIsValid(
    //   event.target.value.trim().length > 6 && emailState.isValid
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type: 'emailValid'})

  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(passwordState.isValid);
    dispatchPassword({type: 'passwordValid'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
