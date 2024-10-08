import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
  const error = useRouteError();
  // console.log(error.response.status);

  return <h2>there was an error...</h2>;
};

export default SinglePageError;
