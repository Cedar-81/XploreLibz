import React, {useState} from 'react';
import { CloudDownload, GetApp } from '@material-ui/icons'
import {  TextField, Select, MenuItem, InputLabel, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'

function Download(props) {

    const cardStyle = {
        position: 'fixed',
        width: '25em',
        zIndex: '1',
        textAlign: 'center',
        opacity: '0.9',
        left: '35%',
    }

    const [downloadFormat, setDownloadFormat] = useState('PDF')

    return(

        <Dialog open={props.open} onClose={props.cancelDownload} style={cardStyle}>

            <DialogTitle>Downloading... 
                <span style={{marginLeft:'.2em'}}><CloudDownload /></span> 
            </DialogTitle>

            <DialogContent>
                <InputLabel id='inputLabel'>Save As: </InputLabel>
                <TextField labelId='inputLabel' defaultValue={props.title} autoFocus='true' />
                <InputLabel style={{marginTop:'1em',}} id='selectLabel'>Format: </InputLabel>
                <Select style={{marginBottom: '.5em',  textAlign: 'left'}} labelId="selectLabel" value={downloadFormat} >
                    <MenuItem onClick={() => setDownloadFormat('PDF')} value='PDF'>PDF</MenuItem>
                    <MenuItem onClick={() => setDownloadFormat('EPUB')} value='EPUB'>EPUB</MenuItem>
                </Select>
 
            </DialogContent>

            <DialogActions style={{marginTop: '.5em'}}>
                <Button 
                    style={{backgroundColor:'midnightBlue', width: '18em', height: '3em', fontSize:'20px', margin:'0', padding:'0'}}
                    onClick={props.cancelDownload}
                >
                    Download 
                    <span><GetApp /></span>
                </Button>
            </DialogActions>

        </Dialog>

    )

}

export default Download;