import { useLanguage } from '../Context/LanguageContext';

const Navbar = () => {
  const { language, english, french } = useLanguage();

  const {languageWord} = language === 'french' ? french : english

  return <nav>{languageWord}</nav>;
};

export default Navbar;
