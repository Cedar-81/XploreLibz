import React, { Fragment } from 'react';
import XBanner from './XploreComponents/XBanner';
import './../Styles/XploreStyles/xplore.css'
import Section from './XploreComponents/Section'
import { connect } from 'react-redux'


function Xplore(props) {
    console.log(props.featured)

    const CardDetail = <Section section={'Most Read'} key={props.mostRead.id} books={props.mostRead} />
    const CardDetail1 = <Section section={'In-Demand'} key={props.inDemand.id} books={props.inDemand} />
    const CardDetail2 = <Section section={'Featured'} key={props.featured.id} books={props.featured} /> 
    const CardDetail3 = <Section section={'Newest'} key={props.newest.id} books={props.newest} /> 
    
    return(
        <Fragment >
            <div className='xplore'>
                <XBanner />

                <div>
                    {CardDetail}
                    {CardDetail1}
                    {CardDetail2}
                    {CardDetail3}
                </div>
            
            </div>

        </Fragment>
    )
    
}

const mapStateToProps = (state) => {
    return {
        mostRead: state.books.books.filter( book => book.category === 'Most Read' ),
        inDemand: state.books.books.filter( book => book.category === 'In Demand' ),
        featured: state.books.books.filter( book => book.category === 'Featured' ),
        newest: state.books.books.filter( book => book.category === 'Newest' )
    }
}

export default connect(mapStateToProps)(Xplore);