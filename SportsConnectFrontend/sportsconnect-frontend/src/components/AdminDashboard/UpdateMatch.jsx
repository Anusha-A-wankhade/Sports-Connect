import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AdminDashboard.css'; // Import CSS for styling

const UpdateMatch = () => {
  const [match, setMatch] = useState(null);
  const [formFields, setFormFields] = useState({});
  const { id } = useParams(); // Get match ID from URL parameters
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch match data from local storage
    const data = JSON.parse(localStorage.getItem('matches')) || [];
    const matchData = data.find(match => match.id === parseInt(id));
    
    if (matchData) {
      setMatch(matchData);
      setFormFields({
        matchBetween: matchData.matchBetween,
        date: matchData.date,
        matchType: matchData.matchType,
        team1Score: matchData.team1Score,
        team2Score: matchData.team2Score,
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields(prevFields => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedMatch = {
      id: parseInt(id),
      ...formFields,
    };

    const data = JSON.parse(localStorage.getItem('matches')) || [];
    const updatedMatches = data.map(match => 
      match.id === parseInt(id) ? updatedMatch : match
    );
    
    localStorage.setItem('matches', JSON.stringify(updatedMatches));
    navigate('/read-match');
  };

  if (!match) {
    return <p>Loading...</p>;
  }

  return (
    <div className="update-match">
      <h2 className="update-match__title">Update Match</h2>
      <form className="update-match__form" onSubmit={handleSubmit}>
        <div className="update-match__field">
          <label className="update-match__label">
            Match Between:
            <input
              className="update-match__input"
              type="text"
              name="matchBetween"
              value={formFields.matchBetween || ''}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="update-match__field">
          <label className="update-match__label">
            Date:
            <input
              className="update-match__input"
              type="date"
              name="date"
              value={formFields.date || ''}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="update-match__field">
          <label className="update-match__label">
            Match Type:
            <input
              className="update-match__input"
              type="text"
              name="matchType"
              value={formFields.matchType || ''}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="update-match__field">
          <label className="update-match__label">
            Team 1 Score:
            <input
              className="update-match__input"
              type="number"
              name="team1Score"
              value={formFields.team1Score || ''}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="update-match__field">
          <label className="update-match__label">
            Team 2 Score:
            <input
              className="update-match__input"
              type="number"
              name="team2Score"
              value={formFields.team2Score || ''}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit" className="update-match__button">Update</button>
      </form>
    </div>
  );
};

export default UpdateMatch;
