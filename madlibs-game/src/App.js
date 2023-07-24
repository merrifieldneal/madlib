import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [words, setWords] = useState({
    noun: '',
    adjective: '',
    verb: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setWords((prevWords) => ({
      ...prevWords,
      [name]: value,
    }));
  };

  const handleGenerateStory = () => {
    const { noun, adjective, verb } = words;
    const story = `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} all day long.`;
    return story;
  };

  return (
    <div className="App">
      <h1>Madlibs Game</h1>
      <label>
        Noun:
        <input
          type="text"
          name="noun"
          value={words.noun}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Adjective:
        <input
          type="text"
          name="adjective"
          value={words.adjective}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Verb:
        <input
          type="text"
          name="verb"
          value={words.verb}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button onClick={handleGenerateStory}>Generate Story</button>
      {words.noun && words.adjective && words.verb && (
        <div>
          <h2>Story:</h2>
          <p>{handleGenerateStory()}</p>
        </div>
      )}
    </div>
  );
};

export default App;
