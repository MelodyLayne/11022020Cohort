import { Link } from 'react-router-dom';

function CatsIndex({ cats }) {
  return (
    <div className='cats-index'>
      <h2>Cats Index</h2>
      <ul>
        {cats.map(cat => (
          <li key={cat.id}>
            <Link to={`/cats/${cat.id}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatsIndex;
