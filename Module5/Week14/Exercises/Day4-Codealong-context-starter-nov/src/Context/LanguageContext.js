import { useState, createContext, useContext } from 'react';
import { french, english } from '../data/languages';

export const LanguageContext = createContext({ language: 'english' });

export const useLanguage = () => {
	return useContext(LanguageContext);
}

export const LanguageProvider = (props) => {
	const [language, setLanguage] = useState('french');

	return (
		<LanguageContext.Provider
			value={{ language, setLanguage, french, english }}
		>
			{props.children}
		</LanguageContext.Provider>
	);
};
