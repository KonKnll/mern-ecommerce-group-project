import { Link } from 'react-router-dom';

import { useContext } from 'react';

import { CustomizeContext } from '../context/CustomizeContext';

const About = () => {
  const { footerOneTitle, footerOneText } = useContext(CustomizeContext);
  return (
    <div className="col-12 d-flex justify-content-evenly mb-5 mx-auto w-50 h-50 aboutus-contactus-maindiv">
      <div className="main-box card p-5 shadow">
        <h1 className="mb-4">{footerOneTitle}</h1>
        <p className="mb-5">{footerOneText}</p>
        <Link to="/home">
          <button type="button" className="btn btn-success">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
