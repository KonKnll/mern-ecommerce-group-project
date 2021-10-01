import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ProductsContext } from '../context/ProductsContext';
import { CustomizeContext } from '../context/CustomizeContext';

import SearchBar from './SearchBar';

const Menu = () => {
  const { products } = useContext(ProductsContext);
  const { storeTitle } = useContext(CustomizeContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg p-2 nav-colors mb-5">
        <div className="container-fluid d-flex p-2 bd-highlight justify-content-between">
          <div>
            <Link to="/home" className="navbar-brand">
              <img
                style={{ width: '35px', height: '35px' }}
                className="d-inline-block align-top"
                src="img/eshop-logo.png"
                alt="logo"
              />
              <h2 style={{ display: 'inline', marginLeft: '6px' }}>
                {storeTitle}
              </h2>
            </Link>
          </div>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <SearchBar data={products} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
