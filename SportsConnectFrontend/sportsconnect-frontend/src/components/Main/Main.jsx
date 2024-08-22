// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Main.css";

// function Main({ selectedSport }) {
//   const [fixtures, setFixtures] = useState([]);

//   useEffect(() => {
//     // Fetch fixtures for the selected sport
//     axios
//       .get(`http://localhost:8080/api/fixtures/${selectedSport}`)
//       .then((response) => {
//         console.log("Fetched fixtures:", response.data); // Log the fetched data for debugging
//         setFixtures(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching fixtures:", error);
//       });
//   }, [selectedSport]);

//   return (
//     <div className="fixture-list">
//       {fixtures.length === 0 ? (
//         <p>No fixtures available</p>
//       ) : (
//         fixtures.map((fixture) => (
//           <div key={fixture.matchId} className="fixture-card">
//             <h3>{fixture.team1} vs {fixture.team2}</h3>
//             <p>Date: {fixture.matchDate}</p>
//             <p>Type: {fixture.matchType}</p>
//             <p>{fixture.team1} Score: {fixture.team1Score}</p>
//             <p>{fixture.team2} Score: {fixture.team2Score}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Main;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Main.css";

function Main({ selectedSport }) {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/fixtures/${selectedSport}`)
      .then((response) => {
        console.log("Fetched fixtures:", response.data);
        setFixtures(response.data);
      })
      .catch((error) => {
        console.error("Error fetching fixtures:", error);
      });
  }, [selectedSport]);

  return (
    <div className="fixture-list">
      {fixtures.length === 0 ? (
        <p>No fixtures available</p>
      ) : (
        fixtures.map((fixture) => (
          <div key={fixture.matchId} className="fixture-card">
            <h3>{fixture.team1} vs {fixture.team2}</h3>
            <p>Date: {fixture.matchDate}</p>
            <p>Type: {fixture.matchType}</p>
            <p>{fixture.team1} Score: {fixture.team1Score}</p>
            <p>{fixture.team2} Score: {fixture.team2Score}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Main;
