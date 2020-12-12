import React from 'react'
import { connect } from 'react-redux'
import { HourglassEmpty } from '@material-ui/icons'
import '../../Styles/BookStoreStyles/DisplayBooks.css'
import BookCard from '../XploreComponents/Card'


function DisplayBooks(props) {
    console.log(props.collection) 

    let displayCode = null
       

    const books = props.collection.map( book => 

        <BookCard title={book.title} img={book.img} genre={book.genre} plot={book.plot} key={book.id} />
        
    )

    if(props.collection.length < 1) {

        displayCode = 

        <div className='notFound'>
        <HourglassEmpty className='notFoundIcon' />
        <h3>sorry but no book was found in this genre</h3>
        </div>
 
        return displayCode
    } else if(props.collection.length >= 1) {
        displayCode = 

        <div className='Cards'>
        <div className='books'>
           {books} 
        </div>

        
        </div>
    }

    return(

        [displayCode]
        
    )
}

const mapStateToProps = (state) => {
    return {
        all: state.books.book,
        collection: state.books.filteredByGenre
    }
        
    
}

export default connect(mapStateToProps)(DisplayBooks) 