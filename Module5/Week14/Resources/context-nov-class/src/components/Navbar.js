import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { language, english, french } = useLanguage();

  const { languageWord } = language === 'english' ? english : french;

  return <nav>{languageWord}</nav>;
};

export default Navbar;
