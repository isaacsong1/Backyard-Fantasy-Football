import React, {useState} from "react";
import TeamList from "./TeamList";
import { useOutletContext } from "react-router-dom";
import { Form, Button } from 'semantic-ui-react';


const NewTeam = () => {
  const {teams} = useOutletContext();
  const {handleSubmit} = useOutletContext();
  const localUser = JSON.parse(localStorage.getItem('user'))
  const localUserName = localUser.foundUser.name
  const [newTeam ,setNewTeam] = useState({
    name: "",
    image: "",
    owner: localUserName,
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
  if (newTeam.name.trim() && newTeam.image.trim()) {
    handleSubmit(newTeam)
    setNewTeam({
      name: "",
      image: "",
      owner: "",
      players: []
  })
  } else {
    alert("Please fill out form")
  }
}

  return (
    <div id="newTeamForm">
      <h1 id="pageHeader">CREATE YOUR TEAM!</h1>
      <Form onSubmit={onSubmit} >
        <Form.Group widths='equal'>
          <Form.Input fluid 
            placeholder='Team Name'
            value={newTeam.name}
            onChange={(e) => handleChange(e)}
            name="name"/>
          <Form.Input fluid 
            placeholder='Team Image'
            value={newTeam.image}
            onChange={(e) => handleChange(e)}
            name="image" />
          <Form.Input fluid 
            placeholder={localUserName}
            value={localUserName}
            name="owner" />
          <Form.Button fluid type='submit'>
              Submit
            </Form.Button>
        </Form.Group>
      </Form>
)
    {/* <form id="form" onSubmit={onSubmit}>
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
    </form> */}
      {
        <TeamList teams={teams} />
      }
    </div>
    
  )
}

export default NewTeam