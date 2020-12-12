import React from 'react';
import { Card } from 'react-bootstrap';
import { Cancel } from '@material-ui/icons'


function Plot(props) {

    const plotBlock = {
        width: '20em',
        height: '15em',
        color: 'white',
        backgroundColor: 'black',
        position: 'absolute',
        zIndex: '1',
        padding: '.5em',
        overflowY: 'scroll',
        opacity: '0.7',
        alignSelf: 'center'
        
    } 
    
    return (

        <Card style={plotBlock}>
             <span ><Cancel onClick={props.cancelPlot } style={{float:'right', marginLeft: '5em', fontSize: '25px' }}/></span>
            <Card.Body>
               
                <Card.Title> {props.title} </Card.Title>
                <Card.Text style={{paddingBottom: '1em', fontFamily: 'sans-serif'}}>
                    {props.plot}
                </Card.Text>
            </Card.Body>
        </Card>

    )
}

export default Plot