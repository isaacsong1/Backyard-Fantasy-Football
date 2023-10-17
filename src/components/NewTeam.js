import React, {useState, useEffect} from "react";
import TeamList from "./TeamList";
const URL = "http://localhost:3000/teams"

const NewTeam = () => {
  const [teams, setTeams] = useState([])
  const [newTeam ,setNewTeam] = useState({
    name: "",
      image: "",
      owner: ""
  })
  console.log(newTeam)

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(setTeams)
    .catch(err => alert('error'))
  }, [])
 
  const handleSubmit = (e) => {
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
      form.reset(); 
      e.preventDefault(); 
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

  return (
    <div id="newTeamForm">
    <form id="form" onSubmit={handleSubmit}>
        <label for="fname">Team name:</label>
        <br/>
        <input type="text" id="fname" name="name" value={newTeam.name} onChange={e => handleChange(e)}/>
          <br/>
        <label htmlFor="lname">Image url:</label>
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
        <TeamList teams={teams}/>
      }
    </div>
    
  )
}

export default NewTeam