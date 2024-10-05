import { useGlobalContext } from './context';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
const ThemeToggle = () => {
  const { isDarkTheme, toogleDark } = useGlobalContext();
  return (
    <section className='toggle-container'>
      <button className='dark-toggle' onClick={toogleDark}>
        {isDarkTheme ? (
          <BsFillMoonFill className='toggle-icon' />
        ) : (
          <BsFillSunFill className='toggle-icon' />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
