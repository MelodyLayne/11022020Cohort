import { useState, useContext } from 'react';
import { LanguageContext } from '../Context/LanguageContext';

export default function Form() {
  const { language, setLanguage, english,  french }=  useContext(LanguageContext);
  const [nameOne, setNameOne] = useState('');
  const [nameTwo, setNameTwo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName);
  };

  const {greeting, instruction, select, firstName, lastName} = language === 'english' ? english : french;

  return (
		<>
			<h1>{greeting} 😃!</h1>
			<h2>
        {select}
        <span onClick={() => setLanguage('french')}>FR</span> |
				<span onClick={() => setLanguage('english')}>EN</span>
			</h2>
			<p>{instruction}</p>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder={firstName}
					value={nameOne}
					onChange={(e) => setNameOne(e.target.value)}
				/>
				<input
					type="text"
					placeholder={lastName}
					value={nameTwo}
					onChange={(e) => setNameTwo(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
		</>
	);
}
