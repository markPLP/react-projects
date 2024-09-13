import { useState } from 'react';
import data from './data';
import Questions from './Questions';

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeID, setActiveID] = useState(null);

  const handleClick = (id) => {
    const newActiveID = id === activeID ? null : id;
    setActiveID(newActiveID);
    console.log(newActiveID);
  };

  return (
    <main>
      <Questions
        questions={questions}
        activeID={activeID}
        handleClick={handleClick}
      />
    </main>
  );
};
export default App;
