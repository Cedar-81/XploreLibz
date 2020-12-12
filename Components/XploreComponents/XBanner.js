import React, { Fragment, Component } from 'react';
import img5 from './../../assets/img5.jpg';
import img6 from './../../assets/img6.jpg';
import img7 from './../../assets/img7.jpg';
import img8 from './../../assets/img8.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './../../Styles/XploreStyles/xbanner.css';
import Nav from './../Nav';


class XBanner extends Component {

    state = {
        
      }
    
    render() { 
        
        const myStyle = {
            backgroundColor: "black",
        }
        
        return ( 
            <Fragment>                

                <Nav style={ myStyle } />

                <Carousel className='Carousel'>

                    <Carousel.Item>
                        <img src={img5 } />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img6} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img7} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img8} />
                    </Carousel.Item>

                </Carousel>

            </Fragment>
         );
    }
}
 
export default XBanner;