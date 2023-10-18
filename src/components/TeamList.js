import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'
import TeamCard from './TeamCard'

const TeamList = ({teams, handlePickTeam}) => {
  return (
    <Table basic='' expanded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Teams</Table.HeaderCell>
        <Table.HeaderCell>Current Points</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='huge' />
            <Header.Content>
              Lena
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>Wesley</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='huge' />
            <Header.Content>
              Matthew
              <Header.Subheader>Fabric Design</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>15</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' rounded size='huge' />
            <Header.Content>
              Lindsay
              <Header.Subheader>Entertainment</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>12</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/mark.png' rounded size='huge' />
            <Header.Content>
              Mark
              <Header.Subheader>Executive</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>11</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
    // <div id="teamList">
    //   <tabel>
    //     <thead id="thead">
    //       <td><h3>ID</h3></td>
    //       <td><h3>Logo</h3></td>
    //       <td><h3>Name</h3></td>
    //       <td><h3>Owner</h3></td>
    //     </thead>
    //     {
    //       teams.map(team => <TeamCard key={team.id} team={team} handlePickTeam={handlePickTeam}/>)
    //     }
    //   </tabel>
    // </div>
  )
}

export default TeamList