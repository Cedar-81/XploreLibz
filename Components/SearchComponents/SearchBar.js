import React, { Fragment, useState }  from 'react'
import { Search, Cancel } from '@material-ui/icons'
import { TextField } from '@material-ui/core'
import '../../Styles/SearchStyles/SearchBar.css'
import {connect} from 'react-redux'
import { Card } from 'react-bootstrap'
import img3 from '../../assets/img3.jpg'


function SearchBar(props) {

    const [inputValue, setInputValue] = useState('')
    
    
    
    const handleChange = (e) => {
        
        
        let ninput = e.target.value


        let filtered = props.book.filter( book => {
            return book.title.toLocaleUpperCase().includes(ninput.toLocaleUpperCase())
        })

        setInputValue(filtered)
        props.updateSetInput(e.target.value)
        
    }

    const searchClicked = (e) => {
        
        props.findBook(e.target.innerText)
        props.updateSetInput(null)

        props.updateFound()
        
        
    }

    const searchSubmit = (e) => {

        e.preventDefault(); 
        props.findBook(document.getElementById('input').value)
        props.updateSetInput(null)

        props.updateFound()
        
        
        

    }


    return(
        <Fragment>
            <div className='searchBar'>
                <form onSubmit={searchSubmit}>
                    <Search onClick={searchSubmit} className='searchIcon' />
                    <Cancel className='cancelIcon' onClick={
                        () => {document.getElementById('input').value = ''; props.updateSetInput(null); document.getElementById('input').focus()}
                    } />
                    <TextField  id='input' className='input' onChange={handleChange} placeholder='Enter your search here' autoFocus={true} />
                </form>

                
                    
                {
                    props._input && 

                    <Card className='mainResultCard' >
                        <Card.Header>search filter by title</Card.Header>
                        {
                            props._input && inputValue.map( book => {
                                return (<div className='Filtered'>
                                        <Card onClick={searchClicked} className='resultCard'>
                                            <Card.Title > {book.title} </Card.Title>
                                        </Card>

                                </div>     )                     
                            }
                            
                            )

                        }
                    </Card>
                }

                

            </div>
        </Fragment>
    )


}

const mapStateToProps = (state) => {
    console.log('yes')
    return {
        book: state.books.books,
        result: state.searchReducer.length
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('no')
    return {
        findBook: (name) => {dispatch({type:'SEARCH_RESULT', name})}, 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)