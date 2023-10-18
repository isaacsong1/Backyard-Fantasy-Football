import React from "react"
import { useOutletContext } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react'

function PlayerCard({player})  {
  const {handleAddToRoster} = useOutletContext();

  const handleClick = () => {
    handleAddToRoster(player)
  }

  return (
    // <Card id='playerCard'>
    //   <Image src={player.image} alt={player.name} />
    //   <Card.Content>
    //     <Card.Header>{player.name}</Card.Header>
    //     <Card.Meta>
    //       <span className='date'>{player.nickname} : {player.position}</span>
    //     </Card.Meta>
    //     <Card.Description>
    //       {player.PPR_projected < player.past_PPR ? <h3>Projected PPR: {player.PPR_projected}<span id='greenArrow'>▲</span></h3>: <h3>Projected PPR: {player.PPR_projected}🔻</h3>}
    //       <Button id='btn' onClick={handleClick}>Handle Roster</Button>
    //     </Card.Description>
    //   </Card.Content>
    // </Card>
    <div id='playerCard'>
      <img id='img' src={player.image} alt={player.name} />
        <h3 id="name">{player.name}</h3>
        <h6 id="nickname">{player.nickname} : {player.position}</h6>
        <div id="PPR">
        {player.PPR_projected < player.past_PPR ? <h4>Projected PPR: {player.PPR_projected}<span id='greenArrow'>▲</span></h4>: <h4>Projected PPR: {player.PPR_projected}🔻</h4>}
        </div>
       <div id="rosterBtn">
         <button id='btn' onClick={handleClick}>Handle Roster</button>
       </div>
        
    </div>
  )
}

export default PlayerCard