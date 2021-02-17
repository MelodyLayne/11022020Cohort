//build an articleReducer

import { articles } from '../data/data'

const GET_ARTICLES = 'article/getArticles'
const ADD_ARTICLE = 'article/addArticle'

// action creator
export const getArticles = () => {
  return {
    type: GET_ARTICLES,
    articles: articles,
  }
}

export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    article: article,
  }
}

const initialState = { articles: [], isLoading: false }

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return { ...state, articles: [...action.articles] }
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.article] }
    default:
      return state
  }
}

export default articleReducer
