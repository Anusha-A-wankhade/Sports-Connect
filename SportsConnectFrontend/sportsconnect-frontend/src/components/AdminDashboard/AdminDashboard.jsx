import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';
import ReadMatch from './ReadMatch';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleCreateMatch = () => {
    navigate('/create-match');
  };

  const handleReadMatch = () => {
    navigate('/read-match');
  };

  return (
    <>
    <div className="crud-buttons">
      <button className="crud-button create" onClick={handleCreateMatch}>Create Match</button>
      <button className="crud-button read" onClick={handleReadMatch}>All Matches</button>
    </div>
      <ReadMatch />
    </>
  );
}

export default AdminDashboard;
