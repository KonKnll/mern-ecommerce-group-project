import {
  useContext,
  // useEffect
} from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const MenuBottom = () => {
  const { cart } = useContext(CartContext);
  const { user } = useContext(UserContext);

  // useEffect(() => {
  //   const fetchData = (cart) => {
  //     console.log('1-panw');
  //     console.log(cart);
  //   };
  //   fetchData();
  //   console.log('2-katw');
  // }, []);

  return (
    <>
      {/* MENU BOTTOM */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-light bg-light p-2">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            id="burger-icon"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0 ">
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link navbar-menu fw-bold font-helvetica text-muted">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link navbar-menu fw-bold font-helvetica text-muted">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/categories/"
                  className="nav-link navbar-menu fw-bold font-helvetica text-muted">
                  Products
                </Link>
              </li>
            </ul>

            <Link to="/login" className="btn btn-primary mx-2">
              {!user.login ? 'Login' : <FaUserCircle />}
            </Link>
            {!user.login ? (
              <Link to="/register" className="btn btn-primary mx-2">
                Sign Up
              </Link>
            ) : (
              ''
            )}
            <p className="cart-items-count">
              <b className="text-white ">{cart.length}</b>
            </p>
            <Link to="/cart" className="btn btn-info me-2">
              <FaShoppingCart />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuBottom;
