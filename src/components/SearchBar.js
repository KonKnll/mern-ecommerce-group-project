import { useState } from 'react';
import {
  Link,
  // useHistory
} from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ data }) => {
  // const history = useHistory();
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;

    const filteredArray = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    searchWord === '' ? setFilteredData([]) : setFilteredData(filteredArray);
  };

  const HandleClear = () => {
    document.querySelector('#search').value = '';
    setFilteredData([]);
  };

  // const HandleSearchButton = (e, topProduct) => {
  //   e.preventDefault();
  //   console.log(topProduct);
  //   const path = 'home';
  //   history.push(path);
  // };

  return (
    <div className="mx-2">
      <form
        style={{ width: '380px' }}
        className="d-flex"
        // onSumbit={(e) => e.preventDefault()}
      >
        <input
          className="form-control mx-3 w-100"
          type="search"
          id="search"
          placeholder="search ..."
          autoComplete="off"
          onChange={handleFilter}
          aria-label="Search"
        />
        <button className="btn btn-success px-4" type="submit">
          <FaSearch />
        </button>
        {filteredData.length !== 0 && (
          <div
            className="data-result"
            style={{
              position: 'absolute',
              top: '80px',
              zIndex: '1000',
            }}>
            {filteredData.slice(0, 15).map((product) => {
              return (
                <Link
                  onClick={HandleClear}
                  className="data-item text-dark"
                  key={product._id}
                  to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>
              );
            })}
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
