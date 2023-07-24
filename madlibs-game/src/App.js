import React, { useState } from 'react';
import './App.css';

const storyOptions = [
  {
    title: 'Adventure',
    story: 'Once upon a time, there was a brave {adjective} {noun} who decided to {verb} on a dangerous quest.',
  },
  {
    title: 'Mystery',
    story: 'In a small {adjective} town, a curious detective found a mysterious {noun} and set out to {verb} the case.',
  },
  {
    title: 'Romance',
    story: 'In a land far away, a {noun} and a {noun} fell in love and vowed to {verb} each other forever.',
  },
];

const App = () => {
  const [selectedStory, setSelectedStory] = useState('');
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
    const story = selectedStory
      ? selectedStory.story.replace(/{(\w+)}/g, (_, key) => words[key])
      : '';
    return story;
  };

  const handleRestart = () => {
    setSelectedStory('');
    setWords({
      noun: '',
      adjective: '',
      verb: '',
    });
  };

  return (
    <div className="App">
      <h1>Madlibs Game</h1>
      {selectedStory ? (
        <div>
          <h2>{selectedStory.title}</h2>
          {words.noun && words.adjective && words.verb ? (
            <div>
              <h3>Story:</h3>
              <p>{handleGenerateStory()}</p>
              <button onClick={handleRestart}>Restart</button>
            </div>
          ) : (
            <p>Please fill out all the prompts.</p>
          )}
        </div>
      ) : (
        <div>
          <h2>Select a Story:</h2>
          <ul>
            {storyOptions.map((option, index) => (
              <li key={index} onClick={() => setSelectedStory(option)}>
                {option.title}
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedStory && (
        <div>
          <h2>Fill in the Blanks:</h2>
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
        </div>
      )}
    </div>
  );
};

export default App;