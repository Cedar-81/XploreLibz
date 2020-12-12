import { Card } from 'react-bootstrap'
import React, {Fragment, useState} from 'react';
import '../../Styles/BookStoreStyles/SettingsBanner.css'
import SelectGenre from './SettingsComponent/SelectGenre';
import TopBooks from './SettingsComponent/TopBooks';
import { Button } from '@material-ui/core'


function SettingsBanner(props) {

    


    const buttonStyle = {
        position: 'absolute',
        zIndex:'3',  
        width: '20em',
        backgroundColor: 'midnightblue',
        top: '3.7em',
        left: '40em',
        outline: 'none',
        fontFamily: "Lobster",
        color: 'white'

    }


    return(
       
        <Fragment>
            <Button onClick={props.updateShowBanner} style={buttonStyle} >{ !props.showBanner ? 'Hide' : 'Show'}</Button>
            { !props.showBanner && 
                (<Card className='dialog'>
                    <Card.Body className='cardContent' >
                        <SelectGenre showBanner={props.showBanner} updateShowBanner={() => props.updateShowBanner(!props.showBanner)}/>
                        <TopBooks />
                    </Card.Body>
                
                </Card>)
            }            
        </Fragment>

            

                
            
            
        
    )

}

export default SettingsBanner;