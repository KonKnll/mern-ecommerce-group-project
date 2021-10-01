import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { CustomizeContext } from '../context/CustomizeContext';
import { UserContext } from '../context/UserContext';

const Contact = () => {
  const { setEnter } = useContext(UserContext);
  const {
    footerTwoTitle,
    footerTwoText,
    footerThreeAddress,
    footerThreeEmail,
    footerThreePhone,
    footerThreeFax,
  } = useContext(CustomizeContext);

  useEffect(() => {
    setEnter(window.location.href);
    console.log(`HOME useEffect setEnter: ${window.location.href}`);
  });

  return (
    <div className="col-12 d-flex justify-content-center mx-auto mb-5 w-50 ">
      <div className="main-box card p-5 shadow">
        <h1 className="mb-5">Contact Page</h1>

        <h3 className="mb-4">{footerTwoTitle}</h3>
        <br />
        <p className="mb-2">{footerTwoText}</p>

        <p className="mb-2 mt-5">
          <b>email</b>: {footerThreeEmail}
        </p>
        <p className="mb-2">
          <b>address</b>: {footerThreeAddress}
        </p>
        <p className="mb-2">
          <b>tel</b>: {footerThreePhone}
        </p>
        <p className="mb-5">
          <b>fax</b>: {footerThreeFax}
        </p>
        <Link to="/home">
          <button type="button" className="btn btn-success">
            Home
          </button>
        </Link>

        <br />
      </div>
    </div>
  );
};

export default Contact;
