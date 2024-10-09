import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

const cocktailsUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

// create function, return data to used in useQuery
const searchCocktailsQuery = (searchTerm) => {
  return {
    // default searchTerm should be empty
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(`${cocktailsUrl}${searchTerm}`);

      return response.data.drinks;
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
  async ({ request }) => {
    //get new URL on form submit
    const url = new URL(request.url);
    // use the url.searchParams.get('search') as a searchTerm
    const searchTerm = url.searchParams.get('search') || 'all';

    // ensureQueryData checks data in cache
    // if its there then use it
    // if not fetch again
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm };
  };

const Landing = () => {
  //const data = useLoaderData();
  // IMPORTANT: import hook userLoaderData to access the data loaded by a route's loader function
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
