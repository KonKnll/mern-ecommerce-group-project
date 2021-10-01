import { useState } from 'react';
import axios from 'axios';

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const onInputChange = (e) => {
    console.log('FILE onChange: ', e.target.files, ' :: SELECTED');
    setFile(e.target.files[0]);
  };

  const onUpload = (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('File', file);
      axios.post('http://localhost:5000/api/uploads', data);
      console.log(`File ${file.name}, uploaded successfully`, data);
    } catch (err) {
      console.log('File Upload ERROR: ', err);
    }
  };

  return (
    <div>
      <div className="form-group" id="upload">
        <label htmlFor="upload" className="mb-2">
          One Upload an image
        </label>
        <input
          type="file"
          multiple=""
          onChange={onInputChange}
          className="form-control mb-3"
        />
      </div>
      <button className="btn btn-outline-primary" onClick={onUpload}>
        Upload
      </button>
    </div>
  );
};

export default FileUploader;
