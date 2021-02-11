import { useContext } from 'react';
import { LanguageContext } from '../Context/LanguageContext';

const Navbar = () => {
  const { language, english, french } = useContext(LanguageContext );
  const {languageWord} = language === french ? english : french

  return <nav>{languageWord}</nav>;
};

export default Navbar;
