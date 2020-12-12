import React, {Fragment, useState} from 'react'
import Nav from './Nav'
import SettingsBanner from './BookStoreComponents/SettingsBanner'
import '../Styles/BookStoreStyles/BookStore.css'
import DisplayBooks from './BookStoreComponents/DisplayBooks'


function BookStore() {

    const [ showBanner, setShowBanner ] = useState(false)

    return(
        <Fragment>
            <div className='bookStore'>
                <Nav />
                <SettingsBanner showBanner={showBanner} updateShowBanner={() => {setShowBanner(!showBanner)}} />
                <DisplayBooks /> 
            </div>
            
        </Fragment>
    )
}

export default BookStore