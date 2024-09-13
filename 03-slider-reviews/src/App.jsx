import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const handlePrev = () => {
    setIndex((index) => {
      let newIndex = (index - 1 + people.length) % people.length;
      return newIndex;
    });
  };
  const handleNext = () => {
    setIndex((index) => {
      let newIndex = (index + 1) % people.length;
      return newIndex;
    });
  };

  const handleRandom = () => {
    let newIndex = Math.floor(Math.random() * people.length) % people.length;

    if (newIndex === index) {
      newIndex = index + 1;
    }
    console.log(newIndex);

    setIndex(newIndex);
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={handleNext}>
            <FaChevronRight />
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
