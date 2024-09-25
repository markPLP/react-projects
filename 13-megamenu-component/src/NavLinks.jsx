import sublinks from './data';
import { useGlobalContext } from './Context';

const NavLinks = () => {
  // get the page Id to show submenus
  const { setPageId } = useGlobalContext();
  return (
    <div className='nav-links'>
      {sublinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button
            key={pageId}
            className='nav-link'
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
