import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import FileUploader from './FileUploader';

import { CustomizeContext } from '../context/CustomizeContext';

const Customize = () => {
  const history = useHistory();
  const {
    setStoreTitle,
    setMainOneTitle,
    setMainOneFirstPara,
    setMainOneSecondPara,
    setMainTwoLeftTitle,
    setMainTwoRightTitle,
    setMainTwoRightText,
    setMainChatTitle,
    setMainChatPara,
    setMainChatButtonText,
    //
    setFooterOneTitle,
    setFooterOneText,
    setFooterTwoTitle,
    setFooterTwoText,
    setFooterThreeTitle,
    setFooterThreeAddress,
    setFooterThreeEmail,
    setFooterThreePhone,
    setFooterThreeFax,
    setFooterFourTeam,
    setFooterFourFacebook,
    setFooterFourInstagram,
    setFooterFourTwitter,
    storeTitle,
    mainOneTitle,
    mainOneFirstPara,
    mainOneSecondPara,
    mainTwoLeftTitle,
    mainTwoRightTitle,
    mainTwoRightText,
    mainChatTitle,
    mainChatPara,
    mainChatButtonText,
    //
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        storeTitle,
        mainOneTitle,
        mainOneFirstPara,
        mainOneSecondPara,
        mainTwoLeftTitle,
        mainTwoRightTitle,
        mainTwoRightText,
        mainChatTitle,
        mainChatPara,
        mainChatButtonText,
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
      };

      localStorage.setItem(
        'shop',
        JSON.stringify({
          formData,
        })
      );

      history.push('/');
    } catch (err) {
      console.log('Customize Shop ERROR: ', err);
      history.push('/home/');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h2 className="ms-3">Customize your Shop</h2>
          <button
            onClick={() => {
              localStorage.removeItem('shop');
              window.location.reload();
            }}
            className="btn btn-primary mb-4 w-75 ">
            Reset to Defaults
          </button>
        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div className="col-6">
          <form
            onSubmit={handleSubmit}
            className="border p-4 bg-white shadow w-100"
            style={{
              width: '420px',
            }}>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h3 className="mb-4">Main</h3>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Store Title
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Insert Title"
                      onChange={(e) => setStoreTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      One Title
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Insert Title"
                      onChange={(e) => setMainOneTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      One First Paragraph
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Insert Text"
                      onChange={(e) => setMainOneFirstPara(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      One Second Paragraph
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Insert Title"
                      onChange={(e) => setMainOneSecondPara(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Two Left Title
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Insert Title"
                      onChange={(e) => setMainTwoLeftTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Two Right Title
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Insert Title"
                      onChange={(e) => setMainTwoRightTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Two Right Text
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Insert Text"
                      onChange={(e) => setMainTwoRightText(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-6 form-half-div">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Chat Title
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Insert Title"
                      onChange={(e) => setMainChatTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Chat Paragraph
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Insert Text"
                      onChange={(e) => setMainChatPara(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Chat Button Text
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Insert Text"
                      onChange={(e) => setMainChatButtonText(e.target.value)}
                    />
                  </div>
                  <FileUploader />
                </div>
              </div>
              <div className="row">
                <div className="mb-3">
                  {/* <button type="submit" className="btn btn-primary mt-4 w-100">
                    Submit
                  </button> */}
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-6">
          <form
            onSubmit={handleSubmit}
            className="border p-4 bg-white shadow w-100"
            style={{
              width: '420px',
            }}>
            <div className="row">
              <div className="col-6">
                <h3 className="mb-4">Footer</h3>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    One Title
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Insert Title"
                    onChange={(e) => setFooterOneTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    One Text
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Insert Text"
                    onChange={(e) => setFooterOneText(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Two Title
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Insert Title"
                    onChange={(e) => setFooterTwoTitle(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Two Text
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Insert Text"
                    onChange={(e) => setFooterTwoText(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Three Title
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Insert Title"
                    onChange={(e) => setFooterThreeTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Three Address
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Insert Address"
                    onChange={(e) => setFooterThreeAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Three Email
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Insert Email"
                    onChange={(e) => setFooterThreeEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Three Phone
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Insert Phone"
                    onChange={(e) => setFooterThreePhone(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Three Fax
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Insert Fax"
                    onChange={(e) => setFooterThreeFax(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Four Team
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Insert Team name"
                    onChange={(e) => setFooterFourTeam(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Four Facebook
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Insert Facebook url"
                    onChange={(e) => setFooterFourFacebook(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Four Instagram
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Insert Instagram url"
                    onChange={(e) => setFooterFourInstagram(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Four Twitter
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Insert Twitter url"
                    onChange={(e) => setFooterFourTwitter(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Customize;
