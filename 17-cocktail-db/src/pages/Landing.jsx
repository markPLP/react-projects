import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const cocktailsUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

// loader func here is found on element: <Landing /> - createBrowserRouter
export const loader = async ({ request }) => {
  console.log(request, 'req');

  //get new URL onload/form submit
  const url = new URL(request.url);
  console.log(url);

  // use the url.searchParams.get('search') as a searchTerm
  const searchTerm = url.searchParams.get('search') || 'all';
  const response = await axios.get(`${cocktailsUrl}${searchTerm}`);
  console.log(response, 'respo');

  const drinks = response.data.drinks || [];
  // console.log(response);
  // return an object with drinks property and destructure
  return { drinks, searchTerm };

  // // Get the search term from the URL query parameters
  // const url = new URL(request.url);
  // const searchTerm = url.searchParams.get('search') || 'margarita'; // Default to an empty string if not found

  // try {
  //   // Fetch data using axios
  //   const response = await axios.get(`${cocktailsUrl}${searchTerm}`);
  //   const drinks = response.data.drinks || []; // Fallback to an empty array if no drinks are found

  //   console.log('Fetching cocktails for:', searchTerm);
  //   console.log('API response:', response.data);
  //   // Return the searchTerm and drinks to the component
  //   return { searchTerm, drinks };
  // } catch (error) {
  //   console.error('Error fetching data from API:', error);
  //   return { searchTerm, drinks: [] }; // Return empty array if there is an error
  // }
};

const Landing = () => {
  //const data = useLoaderData();
  // IMPORTANT: import hook userLoaderData to access the data loaded by a route's loader function
  const { drinks, searchTerm } = useLoaderData();

  if (!drinks || drinks.length === 0) {
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
