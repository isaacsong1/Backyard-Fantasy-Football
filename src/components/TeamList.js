import React from 'react'
import TeamCard from './TeamCard'

const TeamList = ({teams, handlePickTeam}) => {
  return (
    <div id="teamList">
      <tabel>
        <thead id="thead">
          <td><h3>ID</h3></td>
          <td><h3>Logo</h3></td>
          <td><h3>Name</h3></td>
          <td><h3>Owner</h3></td>
        </thead>
        {
          teams.map(team => <TeamCard key={team.id} team={team} handlePickTeam={handlePickTeam}/>)
        }
      </tabel>
    </div>
  )
}

export default TeamList