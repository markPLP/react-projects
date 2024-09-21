import { useState } from 'react';

const SignleList = ({ listItem, handleDelete }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={() => handleCheck()}
      />
      <p
        style={{
          ...(isChecked && {
            textDecoration: 'line-through',
            textTransform: 'capitalize',
          }),
        }}
      >
        {listItem}
      </p>
      <button
        className='btn btn-remove'
        type='button'
        onClick={() => handleDelete(listItem)}
      >
        delete
      </button>
    </div>
  );
};

export default SignleList;
