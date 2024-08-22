// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// function FixtureDetails() {
//   const { sport, matchId } = useParams();
//   const [fixture, setFixture] = useState(null);

//   useEffect(() => {
//     // Fetch fixture details from the backend
//     axios
//       .get(`http://localhost:8080/api/fixtures/${sport}/${matchId}`)
//       .then((response) => {
//         console.log("Fixture details:", response.data); // Log response data
//         setFixture(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching fixture details:", error);
//       });
//   }, [sport, matchId]);

//   if (!fixture) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>{fixture.team1} vs {fixture.team2}</h2>
//       <p>Date: {fixture.matchDate}</p>
//       <p>Type: {fixture.matchType}</p>
//       <p>{fixture.team1} Score: {fixture.team1Score}</p>
//       <p>{fixture.team2} Score: {fixture.team2Score}</p>
//     </div>
//   );
// }

// export default FixtureDetails;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function FixtureDetails() {
  const { sport, matchId } = useParams();
  const [fixture, setFixture] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/fixtures/${sport}/${matchId}`)
      .then((response) => {
        console.log("Fixture details:", response.data);
        setFixture(response.data);
      })
      .catch((error) => {
        console.error("Error fetching fixture details:", error);
      });
  }, [sport, matchId]);

  if (!fixture) return <p>Loading...</p>;

  return (
    <div>
      <h2>{fixture.team1} vs {fixture.team2}</h2>
      <p>Date: {fixture.matchDate}</p>
      <p>Type: {fixture.matchType}</p>
      <p>{fixture.team1} Score: {fixture.team1Score}</p>
      <p>{fixture.team2} Score: {fixture.team2Score}</p>
    </div>
  );
}

export default FixtureDetails;

