import { useState, createContext } from 'react';
import { french, english } from '../data/languages';

export const LanguageContext = createContext({ language: 'english' });

export const LanguageProvider = (props) => {
	const [language, setLanguage] = useState('french');

	return (
		<LanguageContext.Provider value={{ language, setLanguage, french, english }}>
			{props.children}
		</LanguageContext.Provider>
	);
};
