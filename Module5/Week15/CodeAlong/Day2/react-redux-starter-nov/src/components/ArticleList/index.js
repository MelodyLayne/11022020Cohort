import { useEffect } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SingleArticle from '../SingleArticle';
import ArticleDetail from '../ArticleDetail'
import { getArticles } from '../../reducers/articleReducer';


const ArticleList = () => {
  const dispatch = useDispatch()
  const article = useSelector((state) => state)

  useEffect(() => {
    dispatch(getArticles())
  }, [dispatch])

  return (
    <div>
      <h1>ArticleList</h1>
      <ol>
        {article &&
          article.map(({ title, id }) => (
            <NavLink key={id} to={`/article/${id}`}>
              <ArticleDetail title={title} />
            </NavLink>
        ))}
      </ol>
      
      <Switch>
        <Route path='/article/:id'>
          <SingleArticle />
        </Route>
      </Switch>
    </div>
  );
};
export default ArticleList;
