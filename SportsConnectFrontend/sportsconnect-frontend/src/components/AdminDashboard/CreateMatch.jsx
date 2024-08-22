import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const CreateMatch = () => {
  const [matchType, setMatchType] = useState('');
  const [formFields, setFormFields] = useState([]);
  const navigate = useNavigate();

  const handleMatchTypeChange = (e) => {
    const selectedType = e.target.value;
    setMatchType(selectedType);

    switch (selectedType) {
      case 'cricket':
        setFormFields([
          { label: 'Match Between', type: 'text', name: 'matchBetween', required: true },
          { label: 'Date of Match', type: 'date', name: 'date', required: true },
          { label: 'Type of Match', type: 'text', name: 'typeOfMatch', placeholder: 'ODI, Test, etc.', required: true },
          { label: 'Team 1 Score', type: 'number', name: 'team1Score', required: true },
          { label: 'Team 2 Score', type: 'number', name: 'team2Score', required: true },
        ]);
        break;
      case 'basketball':
        setFormFields([
          { label: 'Match Between', type: 'text', name: 'matchBetween', required: true },
          { label: 'Date of Match', type: 'date', name: 'date', required: true },
          { label: 'Type of Match', type: 'text', name: 'typeOfMatch', placeholder: 'Regular, Playoff, etc.', required: true },
          { label: 'Team 1 Score', type: 'number', name: 'team1Score', required: true },
          { label: 'Team 2 Score', type: 'number', name: 'team2Score', required: true },
        ]);
        break;
      case 'football':
        setFormFields([
          { label: 'Match Between', type: 'text', name: 'matchBetween', required: true },
          { label: 'Date of Match', type: 'date', name: 'date', required: true },
          { label: 'Type of Match', type: 'text', name: 'typeOfMatch', placeholder: 'Friendly, League, etc.', required: true },
          { label: 'Team 1', type: 'text', name: 'team1', required: true },
          { label: 'Team 2', type: 'text', name: 'team2', required: true },
        ]);
        break;
      case 'volleyball':
        setFormFields([
          { label: 'Match Between', type: 'text', name: 'matchBetween', required: true },
          { label: 'Date of Match', type: 'date', name: 'date', required: true },
          { label: 'Type of Match', type: 'text', name: 'typeOfMatch', placeholder: 'Regular, Tournament, etc.', required: true },
          { label: 'Team 1 Score', type: 'number', name: 'team1Score', required: true },
          { label: 'Team 2 Score', type: 'number', name: 'team2Score', required: true },
        ]);
        break;
      case 'tabletennis':
        setFormFields([
          { label: 'Match Between', type: 'text', name: 'matchBetween', required: true },
          { label: 'Date of Match', type: 'date', name: 'date', required: true },
          { label: 'Type of Match', type: 'text', name: 'typeOfMatch', placeholder: 'Single, Double, etc.', required: true },
          { label: 'Team 1 Score', type: 'number', name: 'team1Score', required: true },
          { label: 'Team 2 Score', type: 'number', name: 'team2Score', required: true },
        ]);
        break;
      case 'kabbadi':
        setFormFields([
          { label: 'Match Between', type: 'text', name: 'matchBetween', required: true },
          { label: 'Date of Match', type: 'date', name: 'date', required: true },
          { label: 'Type of Match', type: 'text', name: 'typeOfMatch', placeholder: 'League, Tournament, etc.', required: true },
          { label: 'Team 1 Score', type: 'number', name: 'team1Score', required: true },
          { label: 'Team 2 Score', type: 'number', name: 'team2Score', required: true },
        ]);
        break;
      default:
        setFormFields([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    if (!matchType) {
      alert('Please select a match type.');
      return;
    }

    const isValid = form.checkValidity();
    if (!isValid) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const matchData = {};
    data.forEach((value, key) => {
      matchData[key] = value;
    });

    const existingMatches = JSON.parse(localStorage.getItem('matches')) || [];
    const newMatch = {
      id: Date.now(),
      ...matchData
    };
    existingMatches.push(newMatch);
    localStorage.setItem('matches', JSON.stringify(existingMatches));

    navigate('/read-match');
  };

  return (
    <div className="create-match">
      <h2 className="create-match__title">Create Match</h2>
      <form className="create-match__form" onSubmit={handleSubmit}>
        <label className="create-match__label">
          Match Type:
          <select
            className="create-match__select"
            value={matchType}
            onChange={handleMatchTypeChange}
          >
            <option value="">Select Match Type</option>
            <option value="cricket">Cricket</option>
            <option value="basketball">Basketball</option>
            <option value="football">Football</option>
            <option value="volleyball">Volleyball</option>
            <option value="tabletennis">Table Tennis</option>
            <option value="kabbadi">Kabbadi</option>
          </select>
        </label>

        {formFields.map((field, index) => (
          <div key={index} className="create-match__field">
            <label className="create-match__label">
              {field.label}:
              <input
                className="create-match__input"
                type={field.type}
                name={field.name}
                placeholder={field.placeholder || ''}
                required={field.required}
              />
            </label>
          </div>
        ))}

        <button type="submit" className="create-match__button">Create</button>
      </form>
    </div>
  );
};

export default CreateMatch;
