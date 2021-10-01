import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaPlus } from 'react-icons/fa';

const Products = ({ product }) => {
  const { cart, setCart, setCount } = useContext(CartContext);

  const handleAddToCart = () => {
    console.log(cart, 'On cart click');
    console.log('Product: ', product.name, product._id, 'added');
    // const updatedCart = [...cart, product];
    // Array.isArray(cart) ? setCart([...cart, product]) : setCart([product]);
    // setCart(updatedCart);
    cart.push(product);
    setCart(cart);
    setCount(cart.length);

    localStorage.setItem(
      'cart',
      JSON.stringify({
        cart,
      })
    );
  };

  return (
    <div key={product._id} className="col-12 col-lg-3 col-md-6 col-sm-10 px-2">
      <div
        className="shadow card mb-4 border border-2 border-end-5 border-start-5 border-info
              rounded-3 ">
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image || 'placeholder-image.png'}
            className="card-img-top"
            alt="product placeholder"
          />
        </Link>
        <div className="card-body">
          <Link to={`/product/${product.slug}`}>
            <h5 className="card-title text-justify mb-4 justify-content-center">
              {product.name.length <= 40
                ? product.name
                : `${product.name.slice(0, 40)}...`}
            </h5>
          </Link>
          <h6 className="mb-2">
            Digital product: <b>{product.isDigital ? 'YES' : 'NO'}</b>{' '}
          </h6>
          <h6>
            Brand: <b>{product.brand}</b>
          </h6>
          <h6 className="card-text">
            Category: <b>{product.category.toUpperCase()}</b>
          </h6>
          <h6 className="card-text mb-3">
            Stock:
            {product.inStock > 0 ? (
              <span> In Stock</span>
            ) : (
              <span> Out of Stock</span>
            )}
          </h6>
          <h5 className="card-title text-justify mt-2 justify-content-center">
            {product.description.length <= 80
              ? product.description
              : `${product.description.slice(0, 80)}...`}
          </h5>
          <div className="row mt-5">
            <div className="w-50">
              <h5 className="mt-2 h5">
                <b>{product.price}</b> €
              </h5>
            </div>
            <div className="w-50">
              <button
                onClick={handleAddToCart}
                className="btn btn-primary w-100">
                <FaPlus /> Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
