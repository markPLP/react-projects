import { useState } from 'react';
import people from './data';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    // execute this if number is less than 0
    // else return number
    if (number < 0) {
      return people.length - 1;
    }
    // execute this if number is greater than array length
    // else return number
    if (number > people.length - 1) {
      return 0;
    }
    return number;
  };

  const handlePrev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const handleNext = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const handleRandom = () => {
    let newIndex = Math.floor(Math.random() * people.length);

    if (newIndex === index) {
      newIndex = index + 1;
    }
    console.log(newIndex);
    setIndex(checkNumber(newIndex));
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={handlePrev}>
            prev
          </button>
          <button className="next-btn" onClick={handleNext}>
            next
          </button>
        </div>
        <button className="btn btn-hipster" onClick={handleRandom}>
          Random Review
        </button>
      </article>
    </main>
  );
};
export default App;
