import React from "react";

//filter functionality
const FilterPassword=(props)=>{
    
    const handleInputChange=(event)=>{
         props.onSearch(event.target.value);
    }
    
    return(
    <>
     <label htmlFor="searchbox">Search:</label>
     <input type="text" id="searchbox" onChange={handleInputChange}  onDelete={props.onDeletePassword} ></input>

    </>


    )

}
export default FilterPassword;