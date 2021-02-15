import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const COLORS = [
  "orange",
  "yellow",
  "white",
  "black",
  "brown",
  "gray"
];

function CatForm() {

  const [name, setName] = useState('');
  const [color, setColor] = useState(COLORS[0]);
  const [age, setAge] = useState(0);
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const errors = [];
    if (!name.length) {
      errors.push("Name field is required");
    } else if (name.length > 30) {
      errors.push("Name field must be 30 characters or less");
    }
    if (age < 0 || age > 30) {
      errors.push("Age field must be between 0 and 30");
    };
    setErrors(errors);
  }, [name, age])

  const onSubmit = e => {
    e.preventDefault();
    console.log({
      name,
      color,
      age
    });
    history.push('/')
  }


  return (
    <form className="cat-form" onSubmit={onSubmit}>
      <h2>Create a Cat</h2>
      <ul className="errors">
        {errors.map(error => (
          <li key={error}>
            {error}
          </li>
        ))}
      </ul>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Select a Color
        <select
          onChange={(e) => setColor(e.target.value)}
          value={color}
        >
          {COLORS.map(color => (
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
        Age
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <button type="submit" disabled={errors.length > 0}>Create Cat</button>
    </form>
  );
}

export default CatForm;
