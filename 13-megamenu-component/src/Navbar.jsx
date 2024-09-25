import { useGlobalContext } from './Context';
import { FaBars } from 'react-icons/fa';
import NavLinks from './NavLinks';
import BasicSubMenu from './BasicSubMenu';
const Navbar = () => {
  const { openSidebar, setPageId, normalMenu } = useGlobalContext();

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
        {normalMenu ? <BasicSubMenu /> : <NavLinks />}
      </div>
    </nav>
  );
};

export default Navbar;
