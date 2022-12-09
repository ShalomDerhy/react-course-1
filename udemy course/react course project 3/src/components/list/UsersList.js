import React from 'react';
import ListItem from './ListItem';
import styles from './UserList.module.css'


export default function UsersList(props) {
  const listElements = props.list.map(item => {
    return <ListItem username={item.username} age={item.age} key={item.id} />
  })
    return ( 
      <div className={styles.usersList}>
        <ul>
        {listElements}
        </ul>
      </div>
    );
}