import { useContext, useState } from 'react';
// import { useParams, useHistory } from 'react-router-dom';

import { ProductsContext } from '../context/ProductsContext';
import Product from '../components/Product';

import { UserContext } from '../context/UserContext';

const CategoriesList = () => {
  const { user } = useContext(UserContext);
  const { products, isLoading } = useContext(ProductsContext);
  const [sorting, setSorting] = useState('all');

  const handleCheckBox = (e) => {
    setSorting(e.target.value);
  };

  return (
    <>
      <div className="row" style={{ minHeight: '440px' }}>
        <div className="col-2 p-4 position-absolute ">
          <form className="p-3">
            <h5>Categories Filter:</h5>
            <hr />
            <br />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="all"
                checked={sorting === 'all'}
                onChange={handleCheckBox}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                All Products
              </label>
            </div>
            <br />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="phones"
                checked={sorting === 'phones'}
                onChange={handleCheckBox}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Phones
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="cameras"
                checked={sorting === 'cameras'}
                onChange={handleCheckBox}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Cameras
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="gaming"
                checked={sorting === 'gaming'}
                onChange={handleCheckBox}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Gaming
              </label>
            </div>
          </form>
        </div>

        <div className="col-10 offset-sm-2 ">
          <div className="row">
            <h1 className="mb-5 text-center">
              {sorting.toUpperCase() === 'ALL'
                ? `${sorting.toUpperCase()} PRODUCTS`
                : `${sorting.toUpperCase()} CATEGORY`}
            </h1>
            <h4 className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              voluptatibus illum sapiente doloribus ab mollitia autem optio.
            </h4>

            <p className="mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda quia laboriosam dolor doloremque labore deserunt, cumque
              exercitationem, ipsa consequatur non dolorem debitis? Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Minima eos corrupti
              iste aperiam quos placeat, error, unde, dignissimos sapiente
              fugiat natus voluptatem soluta laboriosam consectetur harum omnis
              quo expedita praesentium. Amet, necessitatibus!
            </p>
            <div className="row">
              <div>{isLoading && <div>Loading...</div>}</div>
              {user?.login
                ? products
                    .filter((product) => product.isActive === true)
                    // eslint-disable-next-line array-callback-return
                    .filter((product) => {
                      if (sorting === 'all') {
                        return <Product key={product._id} product={product} />;
                      } else if (
                        product.category
                          .toLowerCase()
                          .includes(sorting.toLowerCase())
                      ) {
                        return product;
                      }
                    })
                    .map((product) => {
                      return <Product key={product._id} product={product} />;
                    })
                : products
                    .filter((product) => product.isActive === true)
                    .filter((product) => product.isDigital === false)
                    // eslint-disable-next-line array-callback-return
                    .filter((product) => {
                      if (sorting === 'all') {
                        return <Product key={product._id} product={product} />;
                      } else if (
                        product.category
                          .toLowerCase()
                          .includes(sorting.toLowerCase())
                      ) {
                        return product;
                      }
                    })
                    .map((product) => {
                      return <Product key={product._id} product={product} />;
                    })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesList;
