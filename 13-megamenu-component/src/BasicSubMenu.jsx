// import sublinks from './data';

// const BasicSubMenu = () => {
//   return (
//     <ul>
//       {sublinks.map((link) => {
//         const { pageId, page, links } = link;
//         return (
//           <li key={pageId}>
//             {page}
//             {links ? (
//               <ul>
//                 {links.map((item) => {
//                   const { id, label } = item;
//                   return <li key={id}>{label}</li>; // Return JSX directly
//                 })}
//               </ul>
//             ) : (
//               'null'
//             )}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default BasicSubMenu;

import sublinks from './data';

const BasicSubMenu = () => {
  return (
    <ul className='nav-links nav-links-basic'>
      {sublinks.map((link) => {
        const { pageId, page, links } = link;

        let nestedLinks;
        if (links) {
          nestedLinks = (
            <ul className='nav-links-basic__sublinks'>
              {links.map((item) => {
                const { id, label, icon, url } = item;
                return (
                  <li key={id}>
                    <a href={url}>
                      {icon}
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          );
        } else {
          nestedLinks = 'null'; // or you can skip rendering 'null'
        }

        return (
          <li className='nav-link' key={pageId}>
            {page}
            {nestedLinks}
          </li>
        );
      })}
    </ul>
  );
};

export default BasicSubMenu;
