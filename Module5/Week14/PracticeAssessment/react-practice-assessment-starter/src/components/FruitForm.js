import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];

function FruitForm({ fruits }) {
  const [name, setName] = useState('');
  const [color, setColor] = useState(COLORS[0]);
  const [sweetness, setSweetness] = useState(1);
  const [seeds, setSeeds] = useState('yes');
  const [errors, setErrors] = useState([]);
  const history = useHistory();


  useEffect(() => {
    const validateErrors = validate();
    setErrors(validateErrors);
  }, [name, sweetness]);

  function validate() {
      const validateErrors = [];
      if (name.length < 3) validateErrors.push('Name must be 3 or more characters');
      if (name.length > 20) validateErrors.push('Name must be 20 characters or less');
      if (fruits.find(fruit => fruit.name === name)) validateErrors.push('Name already exists.');
      if (sweetness < 1 || sweetness > 10) validateErrors.push('Sweetness must be between 1 and 10');
    return validateErrors;
}

  function onSubmit(e) {
    e.preventDefault();
    const submitValues = {
      name,
      color,
      sweetness,
      seeds
    }
    console.log(submitValues);

    history.push('/')
  }

  return (
		<form className="fruit-form" onSubmit={onSubmit}>
			<h2>Enter a Fruit</h2>
      <ul className="errors">
        {errors.length > 0 &&
          errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
			<label>
        Name
				<input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)} />
			</label>
			<label>
				Select a Color
				<select onChange={(e) => setColor(e.target.value)} value={color}>
					{COLORS.map((color) => (
            <option
              key={color}
              value={color}
            >
							{color}
						</option>
					))}
				</select>
			</label>
			<label>
				Sweetness
				<input
					type="number"
					name="sweetness"
					value={sweetness}
					onChange={(e) => setSweetness(e.target.value)}
				/>
			</label>
			<label>
        <input
          type="radio"
          value="no"
          name="seeds"
          checked={seeds === 'no'}
          onChange={(e) => setSeeds('no')}
          />
				No Seeds
			</label>
			<label>
        <input
          type="radio"
          value="yes"
          name="seeds"
          checked={seeds === 'yes'}
          onChange={(e) => setSeeds('yes')}
        />
				Seeds
			</label>
			<button disabled={errors.length > 0 ? true : false} type="submit">Submit Fruit</button>
		</form>
	);
}

export default FruitForm;
