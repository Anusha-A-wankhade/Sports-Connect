import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css'; // Import CSS file for styling

const ReadMatch = () => {
    const [matches, setMatches] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch match data from local storage
        const data = JSON.parse(localStorage.getItem('matches')) || [];
        setMatches(data);
    }, []);

    const handleUpdate = (id) => {
        // Navigate to update form with the match ID as a parameter
        navigate(`/update-match/${id}`);
    };

    const handleDelete = (id) => {
        // Remove match from local storage and update state
        const updatedMatches = matches.filter(match => match.id !== id);
        localStorage.setItem('matches', JSON.stringify(updatedMatches));
        setMatches(updatedMatches);
    };

    return (
        <div className="read-match">
            <h2 className="read-match__title">All Matches</h2>
            {matches.length > 0 ? (
                <table className="read-match__table">
                    <thead>
                        <tr>
                            <th className="read-match__header">SR. No.</th>
                            <th className="read-match__header">Match Between</th>
                            <th className="read-match__header">Date</th>
                            <th className="read-match__header">Match Type</th>
                            <th className="read-match__header">Team 1 Score</th>
                            <th className="read-match__header">Team 2 Score</th>
                            <th className="read-match__header">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matches.map((match, index) => (
                            <tr key={match.id} className="read-match__row">
                                <td className="read-match__cell">{index + 1}</td>
                                <td className="read-match__cell">{match.matchBetween}</td>
                                <td className="read-match__cell">{match.date}</td>
                                <td className="read-match__cell">{match.typeOfMatch
                                }</td>
                                <td className="read-match__cell">{match.team1Score}</td>
                                <td className="read-match__cell">{match.team2Score}</td>
                                <td className="read-match__cell">
                                    <button
                                        className="read-match__button update"
                                        onClick={() => handleUpdate(match.id)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="read-match__button delete"
                                        onClick={() => handleDelete(match.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="read-match__no-data">No matches found.</p>
            )}
        </div>
    );
};

export default ReadMatch;
