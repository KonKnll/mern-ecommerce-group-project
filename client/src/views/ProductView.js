import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import { FaHome, FaPlus, FaShoppingCart } from 'react-icons/fa';

import { CartContext } from '../context/CartContext';

const ProductView = () => {
  const history = useHistory();

  const { cart, setCount } = useContext(CartContext);
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/products/slug/${slug}`);
        console.log('\nProductView responce: ', data.product, data);
        setProduct(data.product);
      } catch (error) {
        console.log('product view ERROR: ');
        console.log(error);
      }
    };

    fetchData();
  }, [slug]);

  const handleAddToCart = () => {
    console.log('CART :: Product: ', product.name, product._id, 'added');
    cart.push(product);
    setCount(cart.length);

    sessionStorage.setItem(
      'cart',
      JSON.stringify({
        cart,
      })
    );
  };

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <>
      <div className="container w-75 vh100">
        <div className="row shadow">
          <div className="col-6 ">
            <img
              src={product.image}
              className="img-fluid w-75 m-5 card mb-4 border border-2 border-end-5 border-start-5 border-info
              rounded-3"
              alt="product"
            />
          </div>

          <div className="col-6 mb-5">
            <div className="row mt-4">
              <h2>{product.name}</h2>
            </div>

            <div className="row mt-3">
              <div>
                Status:
                {product.inStock > 0 ? (
                  <span>
                    <b> In Stock</b>
                  </span>
                ) : (
                  <span>
                    <b> Out of Stock</b>
                  </span>
                )}
              </div>
              {/* <div className="input-group mb-3">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01">
                  Quantity
                </label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="Insert product quantity"
                />
              </div> */}
            </div>
            <div className="row mt-4">
              <h4>Description</h4>
              <p
                placeholder="Leave a comment here"
                id="description-productpage">
                {product.description}
              </p>
              <h6>
                Digital product: <b>{product.isDigital ? 'YES' : 'NO'}</b>{' '}
              </h6>
              <div className="row mt-3">
                <h1>{product.price} €</h1>
              </div>
            </div>
            <div className="mt-4">
              <button className="btn btn-danger" onClick={handleAddToCart}>
                <FaPlus />
                <FaShoppingCart />
              </button>
              <button
                onClick={() => history.push('/home')}
                className="btn btn-success mx-2">
                <span>Back to Home </span>
                <FaHome />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductView;
