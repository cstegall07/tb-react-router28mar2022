import { Outlet, Link } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <nav>
        <ul>
        <li>
            <Link to="/">Main Section</Link>
          </li>
          <li>
            <Link to="/users/"> User's Home</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default UserLayout;