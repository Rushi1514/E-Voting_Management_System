import React, { useState } from 'react';
import './vote.css'
import Home from '../Home/Home';
const CreateElec = () => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: 'Candidate A', votes: 0 },
    { id: 2, name: 'Candidate B', votes: 0 },
    { id: 3, name: 'Candidate C', votes: 0 },
    { id: 4, name: 'Candidate D', votes: 0 },
    { id: 5, name: 'Candidate E', votes: 0 },
    { id: 6, name: 'Candidate F', votes: 0 },
    { id: 7, name: 'Candidate G', votes: 0 },
    { id: 8, name: 'Candidate H', votes: 0 },
    { id: 9, name: 'Candidate I', votes: 0 },
    { id: 10, name: 'Candidate J', votes: 0 },
    { id: 11, name: 'Candidate K', votes: 0 },
    
  ]);
  const  Handlesubmit=()=>{
    <Home />
  }
  const voteForCandidate = (candidateId) => {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.id === candidateId
          ? { ...candidate, votes: candidate.votes + 1 }
          : candidate
      )
    );
  };
  return (
    <div className='color'>
    <div className="election-container">
      <h1 className="election-title">Election</h1>
      <ul className="candidate-list">
        {candidates.map((candidate) => (
          <li key={candidate.id} className="candidate-item">
            <span className="candidate-name">{candidate.name}</span>
            <span>Votes: {candidate.votes}</span>
            <button className="vote-button" onClick={() => voteForCandidate(candidate.id)}>
              Vote
            </button>
          </li>
        ))}
      </ul>
      <button onClick={Handlesubmit} className='submit'>Submit</button>
    </div>
    </div>
  );
};

export default CreateElec;