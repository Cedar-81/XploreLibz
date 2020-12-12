import Books from "../../../api/bookAPI"

const initState = {
    books: Books,
    filteredByGenre: Books
}

function getBooks(state=initState, action) {

    if(action.type === 'FILTER_GENRE') {
        const filtered = state.books.filter(book => {
            return book.genre.toLocaleUpperCase() === action.val.toLocaleUpperCase()
        })
        console.log(filtered)

        return {
            ...state,
            filteredByGenre: filtered
        }
    }
    return state
}

export default getBooks