const { default: BookCardDetail } = require("../../../api/bookCategoryAPI")


const initState = {
    bookCategoryAPI: BookCardDetail
}

const bookCategory = (state=initState, action) => {
    return state
}

export default bookCategory