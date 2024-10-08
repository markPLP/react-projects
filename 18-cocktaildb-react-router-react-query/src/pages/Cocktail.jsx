import { Link, useLoaderData, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import Wrapper from '../assets/wrappers/CocktailPage';
const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

// create function, return data to used in useQuery
const singleCocktailQuery = (id) => {
  return {
    queryKey: ['singleCocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      console.log(data);

      return data;
    },
  };
};

// loader is not a hook
// to use queryClient hook on loader
// we need to pass queryClient to the loader function
// so we can use queryClient inside loader function
// this means we invoke loader right away
export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    // ensureQueryData checks data in cache
    // if its there then use it
    // if not fetch again
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(singleCocktailQuery(id));
  //console.log(data);

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
