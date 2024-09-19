import { useState } from 'react';
import Form from './Form';
import Values from 'values.js';
import ColorList from './ColorList';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colors, setColors] = useState(new Values('#f12025').all(10));

  const addColor = (color) => {
    // tryCatch if hex is not valid
    try {
      // .all(10) increase count by 10%
      setColors(new Values(color).all(10));
    } catch (error) {
      // toastify library to display error - popup
      toast.error(error.message);
    }
  };

  return (
    <main>
      <section className='container'>
        <h4>color generator</h4>
        <Form addColor={addColor} />
      </section>
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  );
};
export default App;
