import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
  // handle state idle, loading, submitting and etc
  // auto get context prop like contextAPI
  /// NOTE
  /// const value = 'some value'
  /// <Outlet context={{value}}/>
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const value = 'some value';
  return (
    <div>
      <Navbar />
      <section className='page'>
        {isPageLoading ? (
          <div className='loading' />
        ) : (
          <Outlet context={value} />
        )}
      </section>
      <footer>Footer</footer>
    </div>
  );
};

export default HomeLayout;
