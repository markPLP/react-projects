import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const cocktailsUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

// loader func here is found on element: <Landing /> - createBrowserRouter
export const loader = async ({ request }) => {
  //get new URL on form submit
  const url = new URL(request.url);
  // use the url.searchParams.get('search') as a searchTerm
  const searchTerm = url.searchParams.get('search') || '';
  const response = await axios.get(`${cocktailsUrl}${searchTerm}`);
  // console.log(response);
  // return an object with drinks property and destructure
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  //const data = useLoaderData();
  // IMPORTANT: import hook userLoaderData to access the data loaded by a route's loader function
  const { drinks, searchTerm } = useLoaderData();

  if (!drinks) {
    return <h2>No drinks found</h2>;
  }

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
