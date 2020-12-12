import React, {useState, Fragment} from 'react'
import {Button,} from '@material-ui/core'
import { CloudDownload, LocalLibrary, StarRate } from '@material-ui/icons'
import '../../../Styles/XploreStyles/BookDetail.css'
import Nav from '../../Nav'
import Download from './Download'
import {connect} from 'react-redux'

function BookDetail(props) {

    const [open, setOpen] = useState(false)


    function cancelShowDownload() {
        setOpen(false)
    }

    const bkImg = `url(${props.book.img})`

    return (

        <Fragment>

            <Download open={open} cancelDownload={cancelShowDownload} title={props.book.title} />

            <div className='bookDetail'>

                <div className='psuedo'>
                    <span>''</span>
                    <div className='innerPsuedo' style={{backgroundImage: bkImg }} ></div>
                </div>

                <Nav />
            
                <div className='content'>

                    <div className='img'>
                        <img src={props.book.img} />
                    </div>

                    <div className='details'>
                        <h2>Title: <span> {props.book.title} </span></h2>
                        <h2>Genre: <span> {props.book.genre} </span></h2>
                        <div className='summary'>
                            <h2>Summary</h2>
                            <p>
                                {props.book.plot}                      
                            </p>
                        </div>
                        <h2>
                            Rating: 
                            <span>
                                <StarRate style={{color:'orange'}} />
                                <StarRate style={{color:'orange'}} />
                                <StarRate style={{color:'orange'}} />
                                <StarRate style={{color:'orange'}} />
                                <StarRate style={{color:'orange'}} />
                            </span>    
                        </h2>
                        <div>
                            <Button onClick={() => setOpen(true)}>Download<span><CloudDownload className='buttonIcon' /></span></Button>
                            <Button>Read Online<span><LocalLibrary className='buttonIcon' /></span></Button>
                        </div>
                </div>

                </div>


            </div>

        </Fragment>


    )
}

const mapStateToProps = (state, ownProps) => {
    const name = ownProps.match.params.post_title

    return{
        book: state.books.books.find( bookName => bookName.title === name )
    }
}

export default connect(mapStateToProps)(BookDetail)
