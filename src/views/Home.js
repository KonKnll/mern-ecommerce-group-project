import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLaughBeam } from 'react-icons/fa';

import { UserContext } from '../context/UserContext';
// import { CartContext } from '../context/CartContext';
import { CustomizeContext } from '../context/CustomizeContext';

const Home = () => {
  const { setEnter } = useContext(UserContext);
  // const { cart, setCart } = useContext(CartContext);
  const {
    mainOneTitle,
    mainOneFirstPara,
    mainOneSecondPara,
    mainTwoLeftTitle,
    mainTwoRightTitle,
    mainTwoRightText,
    mainChatTitle,
    mainChatPara,
    mainChatButtonText,
  } = useContext(CustomizeContext);

  useEffect(() => {
    setEnter(window.location.href);
    console.log(`HOME useEffect setEnter: ${window.location.href}`);
  });

  // cart.length === 0
  //   ? localStorage.setItem('cart', JSON.stringify({ cart: [] }))
  //   : console.log(cart);

  return (
    <>
      <div className="container" style={{ minHeight: '440px', width: '90%' }}>
        {/* ena block */}

        <div className="row text-white mb-5">
          <div className="col-md-6">
            <img
              className="img-fluid rounded"
              src="/img/image-2.jpg"
              alt="card"
            />
          </div>

          <div className="col-md-6 text-dark">
            <h2 className="mb-4 text-justify">{mainOneTitle}</h2>
            <p className="mb-4 text-justify">{mainOneFirstPara}</p>
            <p>{mainOneSecondPara}</p>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-12 d-flex justify-content-center">
            <Link
              to="/categories/"
              className="btn btn-outline-primary px-5 py-4 teal-color shadow">
              SHOP NOW !
            </Link>
          </div>
        </div>
        <div
          className="row text-dark p-4 shadow mb-4 border border-2 border-end-5 border-start-5 border-info
              rounded-3">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <h2>{mainTwoLeftTitle}</h2>
          </div>

          <div className="col-md-6 text-dark">
            <h4 className="mb-4">{mainTwoRightTitle}</h4>
            <p className="mb-4">{mainTwoRightText}</p>
          </div>
        </div>

        <div className="row p-5 d-flex justify-content-center">
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <Link to="/chat" className="btn btn-success p-3 w-75 mb-4 shadow">
              {`${mainChatButtonText} `}
              <FaLaughBeam />
            </Link>
          </div>

          <div className="col-9 text-dark d-flex flex-column">
            <h3 className="mb-4">{mainChatTitle}</h3>
            <p className="mb-2">{mainChatPara}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
