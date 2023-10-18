import React from "react"
import { useOutletContext } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react'

function PlayerCard({player})  {
  const {handleAddToRoster, handleDeleteFromRoster} = useOutletContext();

  const handleClick = () => {

    player.isDrafted ? handleDeleteFromRoster(player) : handleAddToRoster(player)
    // handleAddToRoster(player)
  }

  return (
    <Card id='playerCard'>
      <Image src={player.image} alt={player.name} />
      <Card.Content>
        <Card.Header>{player.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{player.nickname} : {player.position}</span>
        </Card.Meta>
        <Card.Description>
          {player.PPR_projected < player.past_PPR ? <h3>Projected PPR: {player.PPR_projected}<span id='greenArrow'>▲</span></h3>: <h3>Projected PPR: {player.PPR_projected}🔻</h3>}
          <Button id='btn' onClick={handleClick}>{player.isDrafted ? 'Remove' : 'Hire Player'}</Button>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default PlayerCard