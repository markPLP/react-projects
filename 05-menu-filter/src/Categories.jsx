const Categories = ({ filterCategories, filterBtn }) => {
  return (
    <div className='btn-container'>
      {filterCategories.map((category) => {
        return (
          <button
            key={category}
            type='button'
            className='btn'
            onClick={() => filterBtn(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
