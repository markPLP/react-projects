import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './context';
const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const response = useQuery({
    // react query fetches the images and cache it inside 'image'(current value or past value)
    // need to refetch the images using the searchTerm to update the list('images')
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      const data = result.data;
      return data;
    },
  });

  if (response.isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className='image-container'>
        <h4>there was an error...</h4>
      </section>
    );
  }

  const results = response.data.results;
  // handle if results is < 0
  if (results.length <= 0) {
    return (
      <section className='image-container'>
        <h4>No results found</h4>
      </section>
    );
  }
  return (
    <section className='image-container'>
      {results.map((image) => {
        const { urls, id, alt_description } = image;

        return (
          <img
            key={id}
            src={urls?.regular}
            alt={alt_description}
            className='img'
          />
        );
      })}
    </section>
  );
};

export default Gallery;
