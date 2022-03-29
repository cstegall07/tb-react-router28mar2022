import { Outlet, Link } from "react-router-dom";
import {useState} from 'react';

const Layout = () => {
    const[activePage, setActivePage] = useState({home: true, blogs: false, contact: false, userSection: false});

    if (activePage.home) {
        //add active styling to <Home />
    }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/users/">User Section</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;