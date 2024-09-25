import { useGlobalContext } from './Context';
import { FaBars } from 'react-icons/fa';
import NavLinks from './NavLinks';
const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();

  const handleSubmit = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null);
    }
  };

  return (
    <nav onMouseOver={handleSubmit}>
      <div className='nav-center'>
        <h3 className='logo'>My Website</h3>
        <button className='toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
