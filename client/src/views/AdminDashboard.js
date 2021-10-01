import { useContext, useEffect } from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';

import ChatView from '../views/ChatView';
import Customize from '../components/Customize';
import ProductsTable from '../components/ProductsTable';
import UsersTable from '../components/UsersTable';
import OrdersTable from '../components/OrdersTable';

import { FaHome, FaUserCircle, FaLaughBeam } from 'react-icons/fa';

import { UserContext } from '../context/UserContext';

const AdminDashboard = () => {
  const { user, setUser, setEnter } = useContext(UserContext);
  const history = useHistory();

  const adminUrl = window.location.href;

  useEffect(() => {
    setEnter(adminUrl);
    console.log(`HOME useEffect setEnter: ${adminUrl}`);
  });

  const handleLogOut = () => {
    console.log(
      `Dashboard LOGOUT :: ${user.name} ======================== `,
      user
    );
    localStorage.removeItem('user');
    setUser({});
    history.push('/');
  };

  return (
    <div className="container-fluid g-0">
      {/* ADMIN MENU */}
      <section>
        <nav class="navbar-dark bg-dark m-2 rounded">
          <div className="d-flex justify-content-center p-3">
            <button
              onClick={() => {
                history.push('/home');
                window.location.reload();
              }}
              className="btn btn-outline-primary alert text-white bg-success mx-1">
              <FaHome />
            </button>
            <Link
              to="/admin/dashboard/chat"
              className="btn btn-outline-primary alert text-white bg-success mx-1">
              <FaLaughBeam />
            </Link>
            <Link
              to="/login"
              className="btn btn-outline-primary alert text-white bg-primary mx-1">
              <FaUserCircle />
            </Link>
            {/* SIDEBAR NAV */}
            <Link
              className="btn btn-outline-primary alert text-white bg-primary mx-1"
              to="/admin/dashboard/customize">
              Customize Shop
            </Link>
            <Link
              className="btn btn-outline-primary alert text-dark bg-warning mx-1"
              to="/admin/dashboard/products/list">
              Products
            </Link>
            <Link
              className="btn btn-outline-primary alert text-dark bg-warning mx-1"
              to="/admin/dashboard/users/list">
              Users
            </Link>
            <Link
              className="btn btn-outline-primary alert text-dark bg-warning mx-1"
              to="/admin/dashboard/orders/list">
              Orders
            </Link>
            <button
              onClick={handleLogOut}
              className="btn btn-outline-primary alert text-dark bg-danger mx-1">
              Logout
            </button>
          </div>
        </nav>
      </section>

      {/* MAIN SECTION */}

      <section className="container">
        {adminUrl === 'http://localhost:3000/admin/dashboard' ? (
          <div className="container d-flex justify-content-center align-items-center admin-main">
            <h1>Welcome to Dashboard !</h1>
          </div>
        ) : (
          ''
        )}
        <Switch>
          <Route
            path="/admin/dashboard/products/list"
            render={(props) => (
              <ProductsTable {...props} title={`Products List`} />
            )}
          />

          <Route
            path="/admin/dashboard/users/list"
            render={(props) => <UsersTable {...props} title={`Users List`} />}
          />
          <Route
            path="/admin/dashboard/Orders/list"
            render={(props) => <OrdersTable {...props} title={`Orders List`} />}
          />

          <Route path="/admin/dashboard/chat" component={ChatView} />

          <Route path="/admin/dashboard/customize" component={Customize} />
        </Switch>
      </section>
    </div>
  );
};

export default AdminDashboard;
