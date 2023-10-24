import React, { useState } from 'react';
import './addquestion.css';

const Addquestion = () => {
  const [question, setQuestion] = useState('');
  const [file, setFile] = useState(null);
  const [options, setOptions] = useState([]);
  const [newOption, setNewOption] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleAddOption = () => {
    if (newOption.trim() !== '') {
      const optionWithInfo = {
        text: newOption,
        question: question,
        file: file,
      };

      setOptions([...options, optionWithInfo]);
      setNewOption('');
      setFile(null); // Reset the file after adding an option
    }
  };

  const handleCreatePoll = () => {
    // Here you can implement the logic to create the poll using the gathered data
    const pollData = {
      question,
      file,
      options,
    };
    console.log('Poll Data:', pollData);
  };

  return (
    <div>
      <h2 style={{ fontSize: "30px" }}>Create a Poll</h2>
      <div className='box'>
        <label>Enter Question:</label>
        <textarea
          className='text'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={4}
          cols={50}
        />
      </div>
      <div className='pdf'>
        <label>Choose File (JPG):</label>
        <input
          className="input"
          type="file"
          accept=".jpg"
          onChange={handleFileChange}
        />
        {file && (
          <div className="image-box">
            <img className="uploaded-image" src={URL.createObjectURL(file)} alt="Uploaded" />
          </div>
        )}
      </div>
      <div className='option'>
        <label>Enter Option:</label>
        <input
          className='input'
          type="text"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
        />
        <button onClick={handleAddOption}>Add Option</button>
      </div>
      <div className='option1'>
        <label>Options:</label>
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <strong>Question:</strong> {option.question}
              <br />
              <strong>Option:</strong> {option.text}
              <br />
              {option.file && (
                <div className="image-box">
                  <img className="uploaded-image" src={URL.createObjectURL(option.file)} alt="Uploaded" />
                </div>
              )}
            </li>
          ))}
        </ul>
        <button onClick={handleCreatePoll}>Finish</button>
      </div>
    </div>
  );
};

export default Addquestion;
