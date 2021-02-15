import { useParams } from 'react-router-dom';

function CatShow({ cats }) {
  const { catId } = useParams()
  const cat = cats.find(cat => cat.id === catId);

  return (
    <div className='cat-show'>
      <h2>{cat.name}</h2>
      <div>Color: {cat.color}</div>
      <div>Age: {cat.age}</div>
    </div>
  )
}

export default CatShow;
