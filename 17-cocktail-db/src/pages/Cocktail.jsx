import { Link, useLoaderData, Navigate } from 'react-router-dom';
import axios from 'axios';
import Wrapper from '../assets/wrappers/CocktailPage';
const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({ params }) => {
  const { id } = params;
  // const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);

  return { id, data };
};

const Cocktail = () => {
  const { id, data } = useLoaderData();
  // additional check - use Navigate hook
  if (!data) {
    return <Navigate to={'/'} />;
  }

  const singleDrink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strGlass: glass,
    strAlcoholic: info,
    strCategory: category,
    strInstructions: instructions,
  } = singleDrink;

  const ingredientsObj = singleDrink;
  //console.log(ingredientsObj);

  // get only the properties 'ingredients'
  // get the keys that startsWith 'strIngredient'
  const ingredients = Object.keys(ingredientsObj)
    .filter(
      (key) => key.startsWith('strIngredient') && ingredientsObj[key] !== null
    ) // Filters properties that start with 'strIngredient' and are not null
    .map((key) => ingredientsObj[key]); // map() here return the value of the key in an []
  console.log(ingredients);

  return (
    <Wrapper>
      <header>
        <Link to={'/'} className='btn'>
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className='drink'>
        <img src={image} alt={name} className='img' />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>Name:</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category:</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info:</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass:</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>Ingredients:</span>
            {ingredients.map((ing, index) => {
              return (
                <span className='ing' key={index}>
                  {ing} {index < ingredients.length - 1 ? ',' : ''}
                </span>
              );
            })}
          </p>
          <p>
            <span className='drink-data'>Instructions:</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
