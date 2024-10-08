import Wrapper from '../assets/wrappers/SearchForm';
import { Form, useNavigation } from 'react-router-dom';

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form className='form'>
        <input
          type='search'
          name='search'
          id='search'
          defaultValue={searchTerm}
          // onChange={(e) => setValue(e.target.value)}
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
