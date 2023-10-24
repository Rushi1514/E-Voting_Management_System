import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './CreateElec.css';
const Vote = () => {
  const [electionType, setElectionType] = useState('');
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [pollType, setPollType] = useState('');

  const handleCreatePoll = () => {
    // Here you can implement the logic to create the poll using the gathered data
    const pollData = {
      electionType,
      title,
      startDate,
      endDate,
      startTime,
      endTime,
      pollType,
    };
    console.log('Poll Data:', pollData);
  };

  return (
    <div>
    <div className='conatiner'>
      <h2>Create a Poll</h2>
      <div className='checkbox'>
        <label style={{fontSize:"20px"}}>Election Type:</label>
        <select className="checkbox1" value={electionType} onChange={(e) => setElectionType(e.target.value)}>
          <option value="custom">Custom</option>
          <option value="insolvency">Insolvency</option>
          <option value="shareholder">Shareholder</option>
          <option value="auction">Auction</option>
          <option value="register">Register Voters</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className='title'>
        <label style={{fontSize:"20px"}}>Title of the poll:</label>
        <input className="title1" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className='date'>
        <label style={{fontSize:"20px"}}>Poll Start Date:</label>
        <input className="date1" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </div>
      <div className='date'>
        <label style={{fontSize:"20px"}}>Poll End Date:</label>
        <input  className="date1"  type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <div className='time'>
        <label style={{fontSize:"20px"}}>Poll Start Time:</label>
        <input className="time1" type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
      </div>
      <div className='time'>
        <label style={{fontSize:"20px"}}>Poll End Time:</label>
        <input className="time1" type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      </div>
      <div className='dropdown'>
        <label style={{fontSize:"20px"}}>Poll Type:</label>
        <select className="select1" value={pollType} onChange={(e) => setPollType(e.target.value)}>
          <option value="singleChoice">Public Poll</option>
          <option value="multipleChoice">Private Poll</option>
        </select>
      </div>
      <button className="add" onClick={handleCreatePoll}><Link to="/add">Add Question</Link></button>
      </div>
      <NavLink to="/home"><button>Back</button></NavLink>
    </div>
  );
};

export default Vote;
