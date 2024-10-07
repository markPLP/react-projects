import { NavLink } from 'react-router-dom';

import Wrapper from '../assets/wrappers/Navbar';

const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <span className='logo'>Cocktail party</span>
        <div className='nav-links'>
          <NavLink to='/' className='nav-link'>
            home
          </NavLink>
          <NavLink to='/about' className='nav-link'>
            about
          </NavLink>
          <NavLink to='/newsletter' className='nav-link'>
            newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
