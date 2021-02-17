// add parameter function
import { useParams } from 'react-router-dom';
import './SingleArticle.css';

const SingleArticle = ({ articles }) => {
  //get id from params
  const { id } = useParams()
  //create selector to retrieve state
  const singleArticle = articles.find((article) => article.id.toString() === id)

  return (
    <div className='singleArticle'>
      <h1>{singleArticle.title}</h1>
      <p>{singleArticle.body}</p>
    </div>
  )
}
export default SingleArticle;
