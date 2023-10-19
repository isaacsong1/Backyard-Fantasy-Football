import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'
import TeamCard from './TeamCard'

const TeamList = ({teams}) => {
  return (

    <div id="teamList">
      <table>
        <thead id="thead">
          <td><h3>ID</h3></td>
          <td><h3>Logo</h3></td>
          <td><h3>Name</h3></td>
          <td><h3>Owner</h3></td>
        </thead>
        {
          teams.map(team => <TeamCard key={team.id} team={team} />)
        }
      </table>
    </div>
  )
}

export default TeamList