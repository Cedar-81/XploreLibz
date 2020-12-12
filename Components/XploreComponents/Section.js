import React, {Fragment} from 'react';

import BookCard from './Card';
import '../../Styles/XploreStyles/section.css'
import {connect} from 'react-redux'

function Section(props) {

    

    const bookProps = props.books.map( books => 
          
        <BookCard img={books.img} key={books.id} title={books.title} rating={books.rating} genre={books.genre} plot={books.plot} />

    
   
    )


    return (
        
        <Fragment>

            <div className='section' > 


                <h3 className='sectionHeading'>{props.section} <span><hr></hr></span></h3>


                <div className='sectionBooks'>

                   
                    {bookProps}
                    
                    

                   <div className='viewall'>
                      <h3>View All</h3> 
                   </div>
                   
                </div>

               
                     
            </div>


        </Fragment>

    )

}


export default Section;