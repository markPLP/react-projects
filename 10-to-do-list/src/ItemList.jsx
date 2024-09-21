import SignleList from './SignleList';
import { nanoid } from 'nanoid';

const ItemList = ({ list, handleDelete }) => {
  return (
    <div className='items'>
      {list.map((listItem) => {
        const listId = nanoid();
        return (
          <SignleList
            key={listId}
            listItem={listItem}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
