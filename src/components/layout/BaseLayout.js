import { NavLink, Outlet } from 'react-router-dom';

function BaseLayout() {
  const activeStyle = ({ isActive }) => ({
    color: isActive ? 'green' : '',
    fontSize: isActive ? '1.2rem' : '',
  });

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <NavLink style={activeStyle} className='nav-link' to='/'>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink style={activeStyle} className='nav-link' to='/board'>
                BOARD
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default BaseLayout;
