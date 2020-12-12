import React, { Fragment } from 'react';
import './../Styles/HomeStyles/Home.css';
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Nav from './Nav'

function Home() {
    return (
        <Fragment>

            <Nav />

            <div className='backgroundImg'>
                <h1>Lets Xplore <span>Books</span></h1>
                <h2> <span>...the next generation</span>  virtual library</h2>
                <Link to='/xplore'>
                    <Button>Xplore</Button>
                </Link>
                
            </div>
        </Fragment>
    )
}

export default Home;