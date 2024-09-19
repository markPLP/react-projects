import { useState } from 'react';

const Form = ({ addColor }) => {
  const [color, setColor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <form className='color-form' onSubmit={handleSubmit}>
      <input
        type='color'
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type='text'
        value={color}
        placeholder='#f15025'
        onChange={(e) => setColor(e.target.value)}
      />
      <button type='sumbit' className='btn' style={{ background: color }}>
        Submit
      </button>
    </form>
  );
};

export default Form;
