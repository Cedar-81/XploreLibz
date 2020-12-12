import { combineReducers } from 'redux'
import authReducer from './auth'
import bookCategory from './bookCategory'
import getBooks from './getBooks'
import genreList from './genre'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
    books: getBooks,
    auth: authReducer,
    bookCategory,
    genreList,
    searchReducer,
})

export default rootReducer