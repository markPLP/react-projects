import { useState } from 'react';
import Menu from './Menu';
import Title from './Title';
import items from './data';
import Categories from './Categories';
// set all categories using new Set obj
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [filterCategories, setFilterCategories] = useState(allCategories);

  const filterBtn = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu'>
        <Title text='menu for today' />
        <Categories filterCategories={filterCategories} filterBtn={filterBtn} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
