import React, {Fragment, useState} from 'react';
import {  Select, MenuItem, Button } from '@material-ui/core'
import { ArrowDownwardRounded, ArrowUpwardRounded } from '@material-ui/icons'
import { connect  } from 'react-redux'

function SelectGenre(props) {


    const style = {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        boxSizing: 'borderBox',
        height: '16.5em',
        overflow: 'hidden',
        width: '32em',
        top: '8.3em',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'

    }

    const buttonStyle = {
        position: 'relative',
        width: '15em',
        height: '3em',
        marginLeft: '1em',
        color: 'white'
    }

    const filterGenre = (e) => {
        console.log(e.target.innerText)
        props.filter(e.target.innerText)
        props.updateShowBanner(!props.showBanner)
    }

    let genres = props.collection.Fiction.map( genre => <Button onClick={filterGenre} className='genre' style={buttonStyle} > {genre}  </Button>)


    const [changeGenre, setChangeGenre] = useState(genres)

    

    function Fiction() {
        const f_genres = props.collection.Fiction.map( genre => <Button onClick={filterGenre} className='genre' style={buttonStyle} > {genre}  </Button>)
        setChangeGenre(f_genres)
        
    }

    function nonFiction() {
        const n_genres = props.collection.Non_fiction.map( genre => <Button onClick={filterGenre} className='genre' style={buttonStyle} > {genre}  </Button> )
        setChangeGenre(n_genres)
    }
    
    const [GenreCategory, setGenreCategory] = useState('Fiction')

    function scrollUp() {
        document.getElementById('container').scrollBy(0, -50)
    }

    function scrollDown() {
        document.getElementById('container').scrollBy(0, 50)
    }

 


    return(
        <Fragment>

            <ArrowDownwardRounded onClick={scrollDown} style={{
                position: "absolute",
                fontSize: '45px',
                top: '5.5em',
                left: '10.4em',
                color: 'white',
                backgroundColor: 'black',
                opacity: '0.5',
                border: '2px solid tranparent',
                borderRadius: '50%',
                zIndex: '1',
            }} />

            

            <h2 style={{position:'absolute', marginBottom: '2em', top: '1em', marginTop: '1em', marginLeft: '1em', color: 'midnightblue'}}> 
                
                {GenreCategory}
            
                <span>
                    <Select style={{marginBottom: '.5em',  position: 'fixed' , marginLeft: '10em', color: 'white'}} labelId="selectLabel" value={GenreCategory} >
                        
                        <MenuItem>All</MenuItem>
                        
                        <MenuItem onClick={ () => {
                                setGenreCategory('Fiction')
                                Fiction()
                            } 
                            } value='Fiction'
                        >
                            Fiction
                        </MenuItem>

                        <MenuItem onClick={() => {

                                setGenreCategory('Non-Fiction')
                                nonFiction()
                            } 
                            } value='Non-Fiction'
                        >
                            Non-Fiction
                        </MenuItem>

                    </Select>   


                </span>
            
            </h2>

            <div style={style} id='container' >
                <div style={{top: '1.5em', position: 'relative', marginBottom: '6em'}} >
                    {changeGenre}
                </div>                
            </div>


            <ArrowUpwardRounded onClick={scrollUp} style={{
                position: "absolute",
                fontSize: '45px',
                left: '10.4em',
                bottom: '1.5em',
                color: 'white',
                backgroundColor: 'black',
                opacity: '0.5',
                border: '2px solid tranparent',
                borderRadius: '50%',
                zIndex: '1',
            }} />


        </Fragment>
    )

}

const mapStateToProps = (state) => {
    return {
        collection : state.genreList.genres
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filter: (val) => dispatch({type: 'FILTER_GENRE', val})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectGenre);