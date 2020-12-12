import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { LocalLibrary, Note, Book, SystemUpdate, StarRate } from '@material-ui/icons'
import Plot from './CardComponents/Plot'
import Download from './CardComponents/Download'
import '../../Styles/XploreStyles/card.css'
import { Link } from 'react-router-dom'

function BookCard(props) {

    const [ isShown, setIsShown ] = useState(false)
    const [ showPlot, setShowPlot ] = useState(false)
    const [ showDownload, setShowDownload ] = useState(false)

    function cancelShowPlot() {
        setShowPlot(false)
    }

    function cancelShowDownload() {
        setShowDownload(false)
    }


    return(
        <div
            id='card'
            onMouseEnter={() => setIsShown(true) }
            onMouseLeave={() => setIsShown(false)}    
        >

            {
                showPlot && (
                    <Plot cancelPlot={cancelShowPlot} title={props.title} plot={props.plot} />
                )
            }

            
            <Download title={props.title} open={showDownload} cancelDownload={cancelShowDownload} />
            

            {
                !isShown && (
                    <Card className='cards'>
                
                    <Card.Img className='img' variant='top' src={props.img} />
    
                    <Card.Body style={{padding:'.5em', lineHeight: '1em'}}>
                        <Card.Title> {props.title} </Card.Title>
                        <Card.Text>Genre: {props.genre}</Card.Text>
                        <StarRate style={{color:'orange'}}></StarRate>
                        <StarRate style={{color:'orange'}}></StarRate>
                        <StarRate style={{color:'orange'}}></StarRate>
                        <StarRate style={{color:'orange'}}></StarRate>
                        <StarRate style={{color:'orange'}}></StarRate>
                    </Card.Body>
    
    
                    </Card> 
                )
            }

            {
                isShown && (
                    <Card className='cards'>
    
                    <Card.Body style={{display:'flex', flexWrap:'wrap'}}>
                        <LocalLibrary style={{fontSize:'60px'}} />
                        <Note onClick={() => setShowPlot(!showPlot) } style={{fontSize:'60px'}} />
                        <Link to={'/bookdetail/' + props.title}><Book style={{fontSize:'60px'}} /></Link>
                        <SystemUpdate onClick={() => setShowDownload(true) } style={{fontSize:'60px'}} />
                       
                    </Card.Body>
    
    
                    </Card> 
                )
            }



        </div>

    )
}


export default BookCard