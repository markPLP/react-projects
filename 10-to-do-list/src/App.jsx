import { useState } from 'react';
import Form from './Form';
import ItemList from './ItemList';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [list, setList] = useState([]);
  const addList = (item) => {
    const newList = [...list, item];
    setList(newList);
    toast.success('Success, New Item Added.');
  };

  const handleDelete = (listItem) => {
    const deletedItem = list.filter((itemDeleted) => itemDeleted !== listItem);
    console.log(deletedItem);
    setList(deletedItem);
    toast.success('Item Deleted.');
  };

  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form addList={addList} list={list} />
      <ItemList list={list} handleDelete={handleDelete} />
    </section>
  );
};

export default App;
