import { useEffect, useState } from 'react';
import data from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    // get new data using slice based on count
    let newCount = data.slice(0, amount);

    // randomly shuffle the array using Fisher-Yates algo
    const shuffleArray = (arr) => {
      for (let i = arr.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        // swap values using array destructuring
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
      }
      return arr;
    };

    //shuffle array
    const randomShuffle = shuffleArray(newCount);
    // change state// invoke shuffle
    setText(randomShuffle);
  };

  return (
    <section className='section-center'>
      <h4>Random paragraph generator</h4>;
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs</label>
        <input
          type='number'
          name='amount'
          id='amount'
          min='1'
          max='8'
          step='1'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
