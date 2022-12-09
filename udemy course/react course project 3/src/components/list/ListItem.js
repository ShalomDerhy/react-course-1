import React from 'react';

export default function ListItem(props) {
    return ( 
      <li>
       <p>{props.username} ({props.age} years old)</p>
      </li>
    );
}