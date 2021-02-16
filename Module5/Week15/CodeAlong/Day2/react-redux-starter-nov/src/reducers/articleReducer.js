//build an articleReducer
import { articles } from '../data/data';

const GET_ARTICLES = 'article/setArticles'

export const getArticles = () => {
    return {
        type: GET_ARTICLES,
        articles //payload is named specifically
    }
}
const initialState = { articles: [], isLoading: false }

const articleReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case GET_ARTICLES:
            return { ...state, articles: [...action.articles] }
        default:
            return state
    }
}

export default articleReducer;
