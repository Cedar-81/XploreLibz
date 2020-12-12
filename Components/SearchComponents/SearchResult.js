import React, { Fragment, useState }  from 'react'
import { Search, HourglassEmpty, StarRate } from '@material-ui/icons'
import { Card } from 'react-bootstrap'
import '../../Styles/SearchStyles/SearchResult.css'
import img3 from '../../assets/img3.jpg'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

function SearchResult(props) {

    // notfound, yourresultgoeshere, result
    console.log(props.book)
    
    // setNoInput(props.noInput)
    // setFound(props.found)

    let displayCode = null

    if(props.noInput && props.book && props.book.length === 0) {
        displayCode = 

        <div className='noInput'>
        <HourglassEmpty className='nSearchIcon' />
        <h3>sorry your search was not found</h3>
        </div>

        return displayCode
    }
                    

    return(
        <Fragment>
            { 
            
                (!props.noInput) && (
                    <div className='noInput'>
                        <Search className='nSearchIcon' />
                        <h3>your results show here</h3>
                    </div>
                )

            }

             
                
            {!props.notFound && (
                {displayCode}
            )}

            

            { 
                
                !props.found && (
                    <Card className='mainCard'>

                    <Card.Header className='header'>Search Results</Card.Header>
        
                    
        
                    {   props.book.map( result => {
                            return (
                            <Link to={'/bookdetail/' + result.title} key={result.id} >
                                <Card className='resultCard'>
                                    <img src={result.img} />
                                    <div className='resultDescription'>
                                        <h3>Title: {result.title} </h3>
                                        <h4>Genre: {result.genre} </h4>
                                        <div className='summary'>
                                            <h4>Summary <hr /></h4>
                                            <p>
                                                {result.plot}
                                            </p>
                                        </div>
                                        <StarRate style={{color:'orange'}} />
                                        <StarRate style={{color:'orange'}} />
                                        <StarRate style={{color:'orange'}} />
                                        <StarRate style={{color:'orange'}} />
                                        <StarRate style={{color:'orange'}} />
                                    </div>
                                </Card> 
                            </Link>
                            )                               
                        })
                    }
                    
        
                </Card>
                )

            }
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
      book: state.searchReducer.filtered
    }
}

export default connect(mapStateToProps)(SearchResult)