import { useEffect, useState } from 'react';
import Tours from './Tours';
import Loading from './Loading';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    // return items that does not match id
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      // console.log(tours);
      setTours(tours);
    } catch (error) {
      console.error(error, 'Failed to fetch data');
    }
    // set loading to false after fetching regardless success or not
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if loading is true return loading component
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button type="button" className="btn" onClick={() => fetchData()}>
            reload tours
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
