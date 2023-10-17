import React from 'react'
import TeamCard from './TeamCard'

const TeamList = ({teams}) => {
  return (
    <div id="teamList">
      <ul>
        {
          teams.map(team => <TeamCard key={team.id} team={team}/>)
        }
      </ul>
    </div>
  )
}

export default TeamList