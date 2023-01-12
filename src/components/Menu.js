import { useState, useEffect, useRef } from "react";

import Dropdown from './Dropdown';

const Menu = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
     if (dropdown && ref.current && !ref.current.contains(event.target)) {
      setDropdown(false);
     }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
   }, [dropdown]);

  return (
    <li className="menu-items" ref={ref}>
      {items.submenu ? (
        <>
          <button type="button" onClick={() => setDropdown((prev) => !prev)}>
            {items.title}{' '}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default Menu;