import { useState } from 'react';
import Form from './Form';
import ItemList from './ItemList';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

// get local storage, if non set to empty array[]
const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const App = () => {
  // get local storage
  const [list, setList] = useState(defaultList);

  const addList = (item) => {
    const newList = {
      name: item,
      completed: false,
      id: nanoid(),
    };
    const newLists = [...list, newList];
    setList(newLists);
    setLocalStorage(newLists);
    toast.success('Success, New Item Added.');
  };

  const handleDelete = (id) => {
    const deletedItem = list.filter((itemDeleted) => itemDeleted.id !== id);
    console.log(deletedItem);
    setList(deletedItem);
    setLocalStorage(deletedItem);
    toast.success('Item Deleted.');
  };

  const handleCheck = (id) => {
    const newItems = list.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      } else {
        return item;
      }
    });
    setList(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form addList={addList} list={list} />
      <ItemList
        list={list}
        handleDelete={handleDelete}
        // isChecked={isChecked}
        handleCheck={handleCheck}
      />
    </section>
  );
};

export default App;
