import { Form, redirect, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  // get the form data via formData function
  const formData = await request.formData();
  // send data but 1st turn it into object using fromEntries
  const data = Object.fromEntries(formData);
  // perform POST method
  try {
    const response = await axios.post(newsletterUrl, data);

    toast.success(response.data.msg);
    return redirect('/'); // redirect func use only in loader and action function
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg || 'An error occurred');
    return error;
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Form className='form' method='POST'>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='form-input'
          required
        />
      </div>
      <div className='form-row'>
        <label htmlFor='lastname' className='form-label'>
          last name
        </label>
        <input
          type='text'
          name='lastName'
          id='lastName'
          className='form-input'
          required
        />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          type='email'
          name='email'
          id='email'
          defaultValue='test@test.com'
          className='form-input'
          required
        />
      </div>
      <button
        type='submit'
        className='btn btn-block'
        style={{ marginTop: '0.3rem' }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'submiting...' : 'submit'}
      </button>
    </Form>
  );
};

export default Newsletter;
