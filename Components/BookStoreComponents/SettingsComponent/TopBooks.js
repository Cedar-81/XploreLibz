import React from 'react'
import { StarRate } from '@material-ui/icons'
import '../../../Styles/BookStoreStyles/BookStore.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function TopBooks(props) {

    const mostRead = []


    for(let i = 0; i < 3; i++ ) {
        mostRead.push(props.collection[i])
    }

    const recommended = mostRead.map( book => 
  

        <Link to={'/bookdetail/' + book.title} key={book.id} >

            <div style={{right: '5em', }}>
                <img src={book.img} style={{height:'16em', width:'11em', marginLeft:'2em'}} />
                <div style={{marginLeft:'2em', position:'relative'}} >
                    <h3 style={{fontFamily:'Lobster', color:'midnightblue' }} >{book.title}</h3>
                    <StarRate style={{color:'orange'}}></StarRate>
                    <StarRate style={{color:'orange'}}></StarRate>
                    <StarRate style={{color:'orange'}}></StarRate>
                    <StarRate style={{color:'orange'}}></StarRate>
                    <StarRate style={{color:'orange'}}></StarRate>                
                </div>

            </div>
        
        </Link>

    )

    const style = {
        display: 'flex',
        position: 'relative',
        width: '40em',
        marginRight: '4em',
        top: '3em'
       
    }

    return(

        <div style={{ float:'right', position:'relative', bottom:'15em'  }} >
            <div  style={style}>
                {recommended}
            </div>            
        </div>

    )

}

const mapStateToProps = (state) => {
    return {
        collection: state.books.books.filter( book => book.category === 'Most Read' ),
    }
}

export default connect(mapStateToProps)(TopBooks)