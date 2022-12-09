import React, {Fragment} from 'react';
import AddUser from './components/inputs/AddUser';
import UsersList from './components/list/UsersList';

export default function App() {
  // const [usersList, setUsersList] = React.useState([{username : 'hila', age: 19, id : 'user1'}])
  const [usersList, setUsersList] = React.useState([])

  const addNewUserHandler = (user) => {
    const newUser = {
      ...user,
      id : `user${usersList.length+1}`
    }
          setUsersList(prevList => { 
        return [
          ...prevList,
          newUser
        ]
      })
  }
    return ( 
      <Fragment>
        <AddUser onSubmitUser={addNewUserHandler} />
        <UsersList list={usersList} />
      </Fragment>
    );
}