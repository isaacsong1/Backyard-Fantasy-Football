import React, {useState} from "react";
import TeamList from "./TeamList";
import { useOutletContext } from "react-router-dom";


const NewTeam = () => {

  const {teams} = useOutletContext();
  const {handleSubmit} = useOutletContext();
  const [newTeam ,setNewTeam] = useState({
    name: "",
    image: "",
    owner: "",
    players: []
})

const handleChange = ({target: {name, value}}) => {
  setNewTeam(currentNewTeam => {
    return {
      ...currentNewTeam,
      [name]: value

  }
  })
} 

const onSubmit = (e) => {
  e.preventDefault()
  handleSubmit(newTeam)
  setNewTeam({
    name: "",
    image: "",
    owner: "",
    players: []
})
}

  return (
    <div id="newTeamForm">
      <h1 id="createTeam">CREATE YOUR TEAM!</h1>
    <form id="form" onSubmit={onSubmit}>
        <label htmlFor="fname">Team name:</label>
        <br/>
        <input type="text" id="fname" name="name" value={newTeam.name} onChange={(e) => handleChange(e)}/>
          <br/>
        <label htmlFor="lname">Image url:</label>
        <br/>
        <input type="text" id="lname" name="image" value={newTeam.image} onChange={e => handleChange(e)}/>
          <br/>
          <label htmlFor="fname">Owners name:</label>
        <br/>
        <input type="text" id="fname" name="owner" value={newTeam.owner} onChange={e => handleChange(e)}/>
          <br/>
        <input type="submit" value="Submit"/>
    </form>
      {
        <TeamList teams={teams} />
      }
    </div>
    
  )
}

export default NewTeam