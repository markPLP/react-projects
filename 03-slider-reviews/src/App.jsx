import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { useEffect } from 'react';

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
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    const newIndex = randomNumber % people.length;
    setIndex(newIndex);
  };

  useEffect(() => {
    let intervalId = setInterval(() => {
      handleRandom();
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, [index]);
  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
        <button className='btn btn-hipster' onClick={handleRandom}>
          Random Review
        </button>
      </article>
    </main>
  );
};
export default App;
