import React,{useState} from "react";
import Button from "../UI/Button";


const AddPassword = (props)=>{

const[enteredTitle,setTitle]=useState("");
const[enteredPassword,setPassword]=useState("");

const passwordFormSubmitHandler=(event)=>{
  event.preventDefault();
  props.onAddPassword (enteredTitle,enteredPassword);
  setTitle("");
  setPassword("");


}
const titleChangeHandler=(event)=>{
    
    setTitle(event.target.value);
  
  }
  const passwordChangeHandler=(event)=>{
    setPassword(event.target.value);
  
  }


return(

<form onSubmit={passwordFormSubmitHandler}>
<div>
<label htmlFor="title">Title:</label>
<input type="text" id="title" onChange={titleChangeHandler} value={enteredTitle}></input></div>
<div>
<label htmlFor="password">Password:</label>
<input type="text" id="password" onChange={passwordChangeHandler} value={enteredPassword}></input></div>
<Button type="submit">Add</Button>



</form>

)



}
export default AddPassword;