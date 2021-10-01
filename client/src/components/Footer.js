import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CustomizeContext } from '../context/CustomizeContext';
import {
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  const {
    footerOneTitle,
    footerOneText,
    footerTwoTitle,
    footerTwoText,
    footerThreeTitle,
    footerThreeAddress,
    footerThreeEmail,
    footerThreePhone,
    footerThreeFax,
    footerFourTeam,
    footerFourFacebook,
    footerFourInstagram,
    footerFourTwitter,
  } = useContext(CustomizeContext);
  return (
    <>
      <div className="row p-5 nav-colors"></div>
      <div className="bg-secondary text-white pt-5 pb-4 bg-dark">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto">
            <Link to="/about" className="nav-link active teal-color">
              <h4 className=" mb-2 font-weight-bold text-warning  teal-color">
                {footerOneTitle}
              </h4>
            </Link>
            {footerOneText}
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto ">
            <h4 className="mb-2 font-weight-bold text-warning  teal-color nav-link">
              {footerTwoTitle}
            </h4>
            {footerTwoText}
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto">
            <Link to="/contact" className="nav-link active teal-color">
              <h4 className="mb-2 font-weight-bold text-warning  teal-color">
                {footerThreeTitle}
              </h4>
            </Link>

            <p>
              <FaHome />
              {` ${footerThreeAddress}`}
            </p>
            <p>
              <FaEnvelope />
              {` ${footerThreeEmail}`}
            </p>
            <p>
              <FaPhone />
              {` ${footerThreePhone}`}
            </p>
            <p>
              <FaPrint />
              {` ${footerThreeFax}`}
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-2"></div>
          <div className="col-8 d-flex justify-content-center">
            <form>
              <h5 className="d-flex justify-content-center mt-4">
                Subscribe to our Newsletter
              </h5>
              <div className="d-flex w-100 gap-2 mb-5 mt-4">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="email@tosubscribe.com"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className="col-4"></div>

          <hr className="mb-4" />
          <div className="row align-items-center">
            <p className="text-center text-md-right">
              Copyright @{new Date().getFullYear()}, All rights reserved by:
              <Link to="/about" style={{ textDecoration: 'none' }}>
                <strong className="text-warning  teal-color">{` ${footerFourTeam}`}</strong>
              </Link>
            </p>

            <hr className="mb-4" />
            <div className="row align-items-center">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item text-align-left">
                    <Link
                      to={{
                        pathname: footerFourFacebook,
                      }}
                      target="_blank"
                      className="btn-floating btn-lg text-white">
                      <FaFacebook />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to={{
                        pathname: footerFourInstagram,
                      }}
                      target="_blank"
                      className="btn-floating btn-lg text-white">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to={{
                        pathname: footerFourTwitter,
                      }}
                      target="_blank"
                      className="btn-floating btn-lg text-white">
                      <FaTwitter />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
