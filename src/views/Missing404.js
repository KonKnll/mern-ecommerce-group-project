import { Link } from 'react-router-dom';

const Missing404 = () => {
  return (
    <div className="bg-danger">
      <h2>Page Not Found</h2>
      <p>Well, that's disappointing</p>
      <br />
      <p>
        <Link to="/home">Visit Our Homepage</Link>
      </p>
      <br />
    </div>
  );
};

export default Missing404;
