import React, {Fragment} from 'react';
import Button from '../Button';
import styles from './addUser.module.css'
import ErrorModel from './ErrorModel'

export default function AddUser(props) {
  // const [enteredUsername,setEnteredUsername] = React.useState('')
  // const [enteredAge,setEnteredAge] = React.useState('')
  const usernameRef = React.useRef()
  const ageRef = React.useRef()
  const [error, setError] = React.useState()

  const submitUserHandler = (event) => {
    event.preventDefault()
    const enteredUsername = usernameRef.current.value
    const enteredAge = ageRef.current.value
    if(enteredUsername.trim().length<=0 || enteredAge.trim().length <= 0)  {
      setError(
        {
          title: 'Invalid input',
          content: 'Please enter a valid name and age (non-empty values).'
        }
      )
    } 
    else if(Number(enteredAge) < 1) {
      setError(
        {
          title: 'Invalid age',
          content: 'Please enter a valid age (>0).'
        }
      )
    }
    else {
      const newUser = {
      username : enteredUsername,
      age : +enteredAge
      }
      props.onSubmitUser(newUser)
      // setEnteredAge('')
      // setEnteredUsername('')
      usernameRef.current.value = ''
      ageRef.current.value = ''

    } 
  }

  // const changeUsernameHandler = (event) => {
  //   setEnteredUsername(event.target.value)
  // }

  // const changeAgeHandler = (event) => {
  //   setEnteredAge(event.target.value)
  // }

  const closeModelHandler = () => {
    setError()
  }

    return ( 
      <Fragment>
        {error && <ErrorModel title={error.title} content={error.content} onClickOK={closeModelHandler} />}
        <form className={styles.input} onSubmit={submitUserHandler}>
          <div >
            <div>
              <label>username</label>
              <input ref={usernameRef} type='text'></input>
            </div>
            <div>
              <label>age (years)</label>
              <input ref={ageRef} type='number'></input>
            </div>
          </div>
          <Button type='submit'>Add User</Button>
        </form>
      </Fragment>
    );
}