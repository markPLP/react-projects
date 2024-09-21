import { useState } from 'react';
import { toast } from 'react-toastify';
const Form = ({ addList }) => {
  const [item, setItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (item === '') {
      toast.error('Please, add an Item');
      return;
    }
    addList(item);
    setItem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>To do List</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
