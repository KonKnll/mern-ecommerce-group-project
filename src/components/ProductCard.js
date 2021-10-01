import { useContext } from 'react';
import { FaTrash, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  const handleDelete = () => {
    console.log(product, 'product from productcard-delete');
    console.log('cart prin', cart);
    const updatedCart = cart.filter((item) => item._id !== product._id);
    setCart(updatedCart);
    console.log(updatedCart, 'UPDATED CART');
    // localStorage.removeItem('cart');
    // localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <>
      <div className="col-md-5 col=11 mx-auto bg-light d-flex justify-content-center align-items-cneter shadow-product_img">
        <img
          src={product.image}
          className="img-fluid card mb-4 border border-2 border-end-5 border-start-5 border-info
              rounded-3"
          alt="cart-img"
        />
      </div>

      <div className="col-md-7 col-11 mx-auto px-4 mt-2">
        <div className="row">
          <div className="col-8 card-title mb-3">
            <Link to={`/product/${product.slug}`} className="product_name">
              <h5>
                {product.name.length <= 33
                  ? product.name
                  : `${product.name.slice(0, 33)}...`}
              </h5>
            </Link>
          </div>{' '}
          <p className="mb-1">
            Category: <b className="text-uppercase">{product.category}</b>
          </p>
          <p>
            {/* <div className="col-6">
            <ul className="pagination justifly-content-end set_quantity">
						<li className="page-item">
                <button className="page-link ">
								<FaMinus />
                </button>
								</li>
								<li className="page-item">
                <input
                  type="text"
                  name="textbox"
                  className="page-link"
                  // value="1"
                  id="textbox"
									/>
									</li>
									<li className="page-item">
									<button className="page-link">
                  <FaPlus />
									</button>
									</li>
									</ul>
								</div> */}
          </p>
          <div>
            {product.isDigital && (
              <p>
                <FaDownload /> Digital Product
              </p>
            )}
          </div>
          <div className="row">
            <div className="col-4 d-flex justifly-content-end price_money w-100 mt-1">
              <p>
                Price: <b>{product.price}€</b>
              </p>
            </div>
            <div className="col-10 d-flex justify-content-between remove_wish">
              <button onClick={handleDelete} className="btn btn-danger w-25">
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="border" />
    </>
  );
};

export default ProductCard;
