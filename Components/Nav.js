import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './../Styles/NavStyles/Nav.css'

function Nav() {
    return(
        <Fragment>
            <nav>
                <ul>
                    <Link to= {'/'}>
                        <li>Home</li>
                    </Link>

                    <Link to={'/xplore'}>
                        <li>Xplore</li>
                    </Link>

                    <Link to= {'/search'}>
                        <li>Search</li>
                    </Link>

                    <Link to={'/bookstore'}>
                        <li>BookStore</li>
                    </Link>
                    
                    <Link to={'/signin'} >
                        <li>SignIn</li>
                    </Link>
                    
                </ul>
            </nav>


        </Fragment>

    );
}

export default Nav;