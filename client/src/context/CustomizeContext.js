import { useState, useEffect, createContext } from 'react';

export const CustomizeContext = createContext();

export const CustomizeProvider = ({ children }) => {
  const [config, setConfig] = useState({});
  const [storeTitle, setStoreTitle] = useState('Tech Manager');
  const [mainOneTitle, setMainOneTitle] = useState(
    'Placeholder title, insert content: Lorem ipsum dolor sit elit. Expedita, delectus?'
  );
  const [mainOneFirstPara, setMainOneFirstPara] = useState(
    'Placeholder text, insert content: Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga illum esse tempora sit consequuntur ipsum, expedita rem suscipit totam natus accusantium soluta molestias nostrum optio. Tempore iusto aperiam enim dolorum pariatur! Placeholder text, insert content: Lorem ipsum dolor sit amet consectetur adipisicing elit. aperiam enim dolorum pariatur! Placeholder text, insert content: Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga illum esse tempora sit consequuntur ipsum, expedita rem suscipit totam natus accusantium soluta molestias nostrum optio. Tempore iusto aperiam enim dolorum pariatur! Placeholder text, insert content: Lorem ipsum dolor sit amet consectetur adipisicing elit. accusantiem suscipit totam natus accusantium soluta molestias nostrum optio. Tempore iusto aperiam enim dolorum pariatur! Placeholder text, insert content: Lorem ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit. Deleniti !'
  );
  const [mainOneSecondPara, setMainOneSecondPara] = useState(
    'Placeholder text, insert content: Lorem ipsum dolor sit amet  enim dolorum pariatur! Placeholder text, insert content: s nostrum optio. Tempore iusto aperiam enim dolorum pariatur! Placeholder text, insert content: Lorem ipsum dolor sit ametLorem ipsum dolor sit amet consectetur adipisicing elit. riatur! Placeholder text, insert content: Lorem ipsum dolor sit amet consectetur adipisicing elit. accusantiem Deleniti fuga illum esse tempora sit consequuntur ipsum, expedita rem suscipit totam natus accusantium soluta molestias nostrum optio. Tempore iusto aperiam enim dolorum pariatur! Placeholder text, insert content: Lorem ipsum dolor sit amet consectetur adipisicing elit. accusantiem suscipit totaconsectetur adipisicing elit.  adipisicing elit. Deleniti !'
  );
  const [mainTwoLeftTitle, setMainTwoLeftTitle] = useState(
    'Placeholder title, insert content: Lorem, ipsum dolor.'
  );
  const [mainTwoRightTitle, setMainTwoRightTitle] = useState(
    'Placeholder title, insert content: Lorem ipsum dolor sit elit. Expedita, delectus?'
  );
  const [mainTwoRightText, setMainTwoRightText] = useState(
    'Placeholder text, insert content: Lorem ipsum dolor sit iusto aperiam enim dolorum pariatur !'
  );
  const [mainChatTitle, setMainChatTitle] = useState(
    'Placeholder title, insert content: Lorem ipsum dolor sit elit. Expedita, delectus? Aperiam enim dolorum pariatur!'
  );
  const [mainChatPara, setMainChatPara] = useState(
    'Placeholder title, insert content: Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti Tempore iusto ipsum dolor sit amet aperiam enim dolorum ipsum dolor sit amet pariatur!'
  );

  const [mainChatButtonText, setMainChatButtonText] = useState('Chat');
  const [footerOneTitle, setFooterOneTitle] = useState('Placeholder title');
  const [footerOneText, setFooterOneText] = useState(
    'Placeholder text, please add content'
  );
  const [footerTwoTitle, setFooterTwoTitle] = useState('Placeholder title');
  const [footerTwoText, setFooterTwoText] = useState(
    'Placeholder text, please add content'
  );
  const [footerThreeTitle, setFooterThreeTitle] = useState('Placeholder title');
  const [footerThreeAddress, setFooterThreeAddress] = useState(
    'Placeholder text please add content'
  );
  const [footerThreeEmail, setFooterThreeEmail] = useState(
    'Placeholder text, please add content'
  );
  const [footerThreePhone, setFooterThreePhone] = useState(
    'Placeholder text, please add content'
  );
  const [footerThreeFax, setFooterThreeFax] = useState(
    'Placeholder text, please add content'
  );
  const [footerFourTeam, setFooterFourTeam] = useState(
    'Place holder add your team'
  );
  const [footerFourFacebook, setFooterFourFacebook] = useState(
    'https://www.facebook.com'
  );
  const [footerFourInstagram, setFooterFourInstagram] = useState(
    'https://www.instagram.com'
  );
  const [footerFourTwitter, setFooterFourTwitter] = useState(
    'https://www.twitter.com'
  );

  useEffect(() => {
    try {
      const fetchedShop = localStorage.getItem('shop');
      if (fetchedShop === null) {
        console.log('\nNo existing configuration for your shop');
        return;
      } else {
        const { formData: shop } = JSON.parse(localStorage.getItem('shop'));
        console.log('\nShop configuration: ', shop);
        const {
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
          footerThreeFax,
          footerThreePhone,
          footerFourTeam,
          footerFourFacebook,
          footerFourInstagram,
          footerFourTwitter,
        } = shop;
        // setConfig(shop);
        setStoreTitle(storeTitle);
        setMainOneTitle(mainOneTitle);
        setMainOneFirstPara(mainOneFirstPara);
        setMainOneSecondPara(mainOneSecondPara);
        setMainTwoLeftTitle(mainTwoLeftTitle);
        setMainTwoRightTitle(mainTwoRightTitle);
        setMainTwoRightText(mainTwoRightText);
        setMainChatTitle(mainChatTitle);
        setMainChatPara(mainChatPara);
        setMainChatButtonText(mainChatButtonText);
        //
        setFooterOneTitle(footerOneTitle);
        setFooterOneText(footerOneText);
        setFooterTwoTitle(footerTwoTitle);
        setFooterTwoText(footerTwoText);
        setFooterThreeTitle(footerThreeTitle);
        setFooterThreeAddress(footerThreeAddress);
        setFooterThreeEmail(footerThreeEmail);
        setFooterThreePhone(footerThreePhone);
        setFooterThreeFax(footerThreeFax);
        setFooterFourTeam(footerFourTeam);
        setFooterFourFacebook(footerFourFacebook);
        setFooterFourInstagram(footerFourInstagram);
        setFooterFourTwitter(footerFourTwitter);
      }
    } catch (err) {
      console.log('\nCustomize ERROR: ', err);
    }
  }, []);

  return (
    <CustomizeContext.Provider
      value={{
        config,
        setConfig,
        //
        storeTitle,
        setStoreTitle,
        mainOneTitle,
        setMainOneTitle,
        mainOneFirstPara,
        setMainOneFirstPara,
        mainOneSecondPara,
        setMainOneSecondPara,
        mainTwoLeftTitle,
        setMainTwoLeftTitle,
        mainTwoRightTitle,
        setMainTwoRightTitle,
        mainTwoRightText,
        setMainTwoRightText,
        mainChatTitle,
        setMainChatTitle,
        mainChatPara,
        setMainChatPara,
        mainChatButtonText,
        setMainChatButtonText,
        //
        footerOneTitle,
        setFooterOneTitle,
        footerOneText,
        setFooterOneText,
        footerTwoTitle,
        setFooterTwoTitle,
        footerTwoText,
        setFooterTwoText,
        footerThreeTitle,
        setFooterThreeTitle,
        footerThreeAddress,
        setFooterThreeAddress,
        footerThreeEmail,
        setFooterThreeEmail,
        footerThreePhone,
        setFooterThreePhone,
        footerThreeFax,
        setFooterThreeFax,
        footerFourTeam,
        setFooterFourTeam,
        footerFourFacebook,
        setFooterFourFacebook,
        footerFourInstagram,
        setFooterFourInstagram,
        footerFourTwitter,
        setFooterFourTwitter,
      }}>
      {children}
    </CustomizeContext.Provider>
  );
};
