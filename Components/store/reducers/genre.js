const { default: Genre } = require("../../../api/genreAPI")

 const initState = {    
    genres : Genre
 }

const genreList = (state=initState, action) => {
    return state
}

export default genreList