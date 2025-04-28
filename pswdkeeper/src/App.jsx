import React,{useState} from 'react'
import AddPassword from "./components/Passwords/AddPassword";
import PasswordList from "./components/Passwords/PasswordList";
import TotalPasswords from "./components/Passwords/TotalPasswords";
import FilterPassword from "./components/Passwords/FilterPassword";


import './App.css'

function App() {
 const [passwordList,setPasswordList]=useState([]);
 
 const [filteredPassword,setFilteredPassword]=useState([]);

 const [showList,setShowList]=useState(true);


 
 
 
 

  const addPasswordHandler=(t,p)=>{
    setPasswordList((prevState)=>{
      
      return ([...prevState,{tit:t ,pass:p,id: Math.random().toString()}]);

    })

  }

  const deletePasswordHandler = (id) => {
    setPasswordList((prevState) => {
      const updatedList = prevState.filter((password) => password.id !== id);
      
      // update the filtered list based on updatedList
      setFilteredPassword((prevFiltered) => 
        prevFiltered.filter((password) => password.id !== id)
      );
      
      return updatedList;
    });
  };
  
  
  
  const inputSearchHandler = (enter) => {
    
   const filteredPasswords = passwordList.filter((password) =>
      password.tit.toLowerCase().includes(enter.toLowerCase()) );



   setFilteredPassword(filteredPasswords); 
   
   if (filteredPasswords.length === 0) {
    setShowList(false);
   
 } else {
    
    setShowList(true);
 }
};
   return (
    <>
    
      <h1>Password Keeper</h1>
      <TotalPasswords onNumber={passwordList.length} ></TotalPasswords>
      
      <FilterPassword onSearch={inputSearchHandler} ></FilterPassword> <br/><br/>
      <AddPassword onAddPassword={addPasswordHandler}/>
      
      
      {showList &&(<PasswordList
        users={filteredPassword.length > 0 ? filteredPassword :passwordList }
        onDeletePassword={deletePasswordHandler}
        
      />)}
      {!showList && <p>No passwords found</p>}
      </>
  )
}

export default App;
