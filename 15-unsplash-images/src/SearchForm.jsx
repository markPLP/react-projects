import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    // get value via elements.search.value
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    //console.log(searchValue);

    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input search-input'
          name='search'
          placeholder='cat'
        />
        <button type='submit' className='btn'>
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
