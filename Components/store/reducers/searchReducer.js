import Books from "../../../api/bookAPI"


const initState = {
    filtered: [],
    length: 0,
    
}


const searchReducer = (state=initState, action) => {
    if(action.type === 'SEARCH_RESULT') {
        let filtered = Books.filter( book => {
            return book.title.toLocaleUpperCase() === action.name.toLocaleUpperCase()
        })
        let filteredLength = filtered.length

        return {
            ...state,
            filtered,
            length: filteredLength
        }
        
    }
    return state
}

export default searchReducer