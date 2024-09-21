import SignleList from './SignleList';
const ItemList = ({ list, handleDelete, handleCheck }) => {
  //const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='items'>
      {list.map((listItem) => {
        //const listId = nanoid();
        console.log(listItem.id);

        return (
          <SignleList
            key={listItem.id}
            listItem={listItem}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
            // isChecked={isChecked}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
