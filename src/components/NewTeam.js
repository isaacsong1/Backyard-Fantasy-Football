import React from "react";

const NewTeam = () => {
  return (
    <div id="newTeamForm">
    
        <label for="fname">Team name:</label>
        <br/>
        <input type="text" id="fname" name="fname" value=""/>
          <br/>
        <label for="lname">Image url:</label>
        <br/>
        <input type="text" id="lname" name="lname" value=""/>
          <br/>
        <input type="submit" value="Submit"/>
      
    </div>
  )
}

export default NewTeam