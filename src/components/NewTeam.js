import React, {useState, useEffect} from "react";
import TeamList from "./TeamList";
import { handleRef } from "@fluentui/react-component-ref";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
const URL = "http://localhost:3000/teams"

const NewTeam = () => {
  const [pickTeam, setPickTeam] = useState({})
  const navigate = useNavigate()
  const {teams} = useOutletContext();
  const [newTeam ,setNewTeam] = useState({
    name: "",
      image: "",
      owner: ""
  })
 
  const handleSubmit = (e) => {
    e.preventDefault(); 
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newTeam)
    })
    .then(res => res.json())
    .then((data) => {
      const form = e.target;
      console.log(data);
      form.reset(); 
      
    })
    .catch(err => alert('err'))
    
  }

  const handleChange = ({target: {name, value}}) => {
    setNewTeam(currentNewTeam => {
      return {
        ...currentNewTeam,
        [name]: value
    }
    })
  } 

  const handlePickTeam = (pickedTeam) => {
    
    setPickTeam(pickedTeam)
    navigate("/myTeam")
  }

  return (
    <div id="newTeamForm">
    <form id="form" onSubmit={handleSubmit}>
        <label for="fname">Team name:</label>
        <br/>
        <input type="text" id="fname" name="name" value={newTeam.name} onChange={e => handleChange(e)}/>
          <br/>
        <label for="lname">Image url:</label>
        <br/>
        <input type="text" id="lname" name="image" value={newTeam.image} onChange={e => handleChange(e)}/>
          <br/>
          <label for="fname">Owners name:</label>
        <br/>
        <input type="text" id="fname" name="owner" value={newTeam.owner} onChange={e => handleChange(e)}/>
          <br/>
        <input type="submit" value="Submit"/>
    </form>
      {
        <TeamList teams={teams} handlePickTeam={handlePickTeam}/>
      }
    </div>
    
  )
}

export default NewTeam