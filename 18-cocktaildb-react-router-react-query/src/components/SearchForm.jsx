import { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/SearchForm';
import { Form, useNavigation } from 'react-router-dom';
import { useRef } from 'react';

const SearchForm = ({ searchTerm }) => {
  const inputRef = useRef(null);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  useEffect(() => {
    if (searchTerm === 'all' && inputRef.current) {
      inputRef.current.value = '';
    }
  }, [searchTerm]);

  return (
    <Wrapper>
      <Form className='form'>
        <input
          type='search'
          name='search'
          id='search'
          defaultValue={searchTerm}
          ref={inputRef}
          className='form-input'
        />
        <button type='submit' className='btn' disabled={isSubmitting}>
          {isSubmitting ? 'searching..' : 'search'}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
