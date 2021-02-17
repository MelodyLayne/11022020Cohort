//build an articleReducer
import { articles } from '../data/data';

const GET_ARTICLES = 'article/setArticles'
const ADD_ARTICLE = 'article/setArticle'

export const getArticles = () => {
    return {
        type: GET_ARTICLES,
        articles //payload is named specifically
    }
}

export const addArticle = (article) => {
    return {
        type: ADD_ARTICLE,
        article
    }
}

const initialState = { articles: [], isLoading: false }

const articleReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case GET_ARTICLES:
            return { ...state, articles: [...action.articles] }
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.article] };
        default:
            return state
    }
}

export default articleReducer;
