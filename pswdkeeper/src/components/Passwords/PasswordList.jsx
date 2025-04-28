import React from 'react';
import Button from '../UI/Button';

const PasswordList = (props) => {
  
  
  if (props.users.length === 0) {
    return <p>No passwords found</p>; 
  }

  return (
    <>
      <h3>All Passwords:</h3>
      {props.users.map((user) => {
        return (
          
          <li key={user.id}>
            {user.tit} {user.pass}
            <Button onClick={() => props.onDeletePassword(user.id)}>Delete</Button>
           
          </li>
          
        );
      })}
    </>
  );
};

export default PasswordList;
