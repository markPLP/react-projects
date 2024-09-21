import { useState } from 'react';

const SignleList = ({ listItem, handleDelete, handleCheck }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={listItem.completed}
        onChange={() => handleCheck(listItem.id)}
      />
      <p
      // style={{
      //   ...(isChecked && {
      //     textDecoration: 'line-through',
      //     textTransform: 'capitalize',
      //   }),
      // }}
      >
        {listItem.name}
      </p>
      <button
        className='btn btn-remove'
        type='button'
        onClick={() => handleDelete(listItem.id)}
      >
        delete
      </button>
    </div>
  );
};

export default SignleList;
