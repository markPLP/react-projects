import { useRef } from 'react';
import sublinks from './data';
import { useGlobalContext } from './Context';
const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  const submenuContainer = useRef(null);
  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    if (!submenu) return; // Ensure submenu is present before continuing
    // get X Y coordinates
    const { clientY, clientX } = event;
    // get the submenu deminsions and desctruct it directly
    const { left, right, bottom } = submenu.getBoundingClientRect();
    // setup logic to hide/show submenu
    if (clientX < left || clientX > right - 15 || clientY > bottom - 15) {
      setTimeout(() => {
        setPageId(null);
      }, 100);
      return;
    }

    // alternative
    // setTimeout(() => {
    //   setPageId(null);
    // }, 200);
  };

  // return values using optional chaining
  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            currentPage?.links.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links.map((link) => {
          const { id, label, icon, url } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
