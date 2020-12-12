import React, {useState}  from 'react'
import SearchBar from './SearchComponents/SearchBar'
import '../Styles/SearchStyles/Search.css'
import Nav from './Nav'
import SearchResult from './SearchComponents/SearchResult'


function Search() {

    const [noInput, setNoInput] = useState(false)
    const [notFound, setNotFound ] = useState(true)
    const [found, setFound] = useState(true)
    const [_input, setInput ] = useState(null)

    const changeFound = () => {
        setFound(false)
        setNoInput(true)
    }

    const changeNotFound = () => {
        
        setNotFound(false)
        setFound(true)
        setNoInput(true)
        
    }

    const changesetInput = (val) => {
        
        setInput(val)
        
    }

    return(
        <div className='searchComponent'>
            <Nav />
            <SearchBar updateFound={changeFound} _input={_input} updateSetInput={changesetInput} updateNotFound={changeNotFound} className='search' />
            <div className='result'>
                <SearchResult noInput={noInput} notFound={notFound} found={found} />
            </div>
        </div>
    )
}



export default Search