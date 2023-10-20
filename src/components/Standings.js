// import { useState, useEffect } from 'react';
// import { useOutletContext } from 'react-router-dom';
// import { Label, Table } from 'semantic-ui-react'

// function Standings() {
//   const { teams } = useOutletContext()
//   const [sortedTeams, setSortedTeams] = useState([]);

//   useEffect(() => {
//     function getTeamsByHighestPoints() {
//       const teamsWithHighestPoints = teams.map(team => {
//         const highestPoints = Math.max(
//           ...(team.players || []).map(player => parseFloat(player.PPR_projected) || 0)
//         );
//         return { ...team, highestPoints };
//       });
  
//       const sortedTeams = teamsWithHighestPoints.sort((a, b) => b.highestPoints - a.highestPoints);

//       setSortedTeams(sortedTeams);
//     }

//     getTeamsByHighestPoints();
//   }, [teams]);

//   return (
//     <section id='standings'>
//       <Table celled>
//         <Table.Header>
//           <Table.Row>
//             <Table.HeaderCell>Ranking</Table.HeaderCell>
//             <Table.HeaderCell>Team</Table.HeaderCell>
//             <Table.HeaderCell>Owner</Table.HeaderCell>
//           </Table.Row>
//         </Table.Header>
//         <Table.Body>
//           {sortedTeams.map((team, index) => (
//             <Table.Row key={team.id}>
//               <Table.Cell>
//                 <Label ribbon>{index + 1}</Label>
//               </Table.Cell>
//               <Table.Cell>{team.name}</Table.Cell>
//               <Table.Cell>{team.owner}</Table.Cell>
//             </Table.Row>
//           ))}
//         </Table.Body>
//       </Table>
//     </section>
//   );
// }

// export default Standings;


import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Label, Table } from 'semantic-ui-react';

function Standings() {
  const { teams } = useOutletContext();
  const [sortedTeams, setSortedTeams] = useState([]);
  const [teamWithHighestPPR, setTeamWithHighestPPR] = useState(null);

  useEffect(() => {
    function getTeamWithHighestPoints() {
      const teamsWithCombinedPoints = teams.map(team => {
        const combinedPoints = team.players.reduce((total, player) => {
          const playerPPR = parseFloat(player.PPR_projected) || 0;
          return total + playerPPR;
        }, 0);
        return { ...team, combinedPoints };
      });

      const sortedTeams = teamsWithCombinedPoints.sort((a, b) => b.combinedPoints - a.combinedPoints);

      setSortedTeams(sortedTeams);

      setTeamWithHighestPPR(sortedTeams[0]);
    }

    getTeamWithHighestPoints();
  }, [teams]);

  return (
    <section id='standings'>
      <h1>Standings</h1>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ranking</Table.HeaderCell>
            <Table.HeaderCell>Team</Table.HeaderCell>
            <Table.HeaderCell>Owner</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sortedTeams.map((team, index) => (
            <Table.Row key={team.id}>
              <Table.Cell>
                <Label ribbon>{index + 1}</Label>
              </Table.Cell>
              <Table.Cell>{team.name}</Table.Cell>
              <Table.Cell>{team.owner}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </section>
  );
}

export default Standings;
