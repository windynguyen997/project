import React from 'react';
import './banner.css'
import 'react-slideshow-image/dist/styles.css'
import Img2 from '../../images/catfood1.jpg'
import Img3 from '../../images/catfood4.jpg'
import { Slide } from 'react-slideshow-image';
import {
    Carousel,
    Collapse,
    Container,
    Fade,
} from 'reactstrap';
const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}
const Banner = () => {

    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div className='banner'>
                        <img src={Img2} alt="img1" />
                        <span className='contain' data-aos="fade-down">
                            <h1>Giải Pháp tối ưu dinh dưỡng BOSS</h1>
                            <h1>Tiết kiệm thời gian cho SEN</h1>
                            <p>Cung cấp cho mèo .....</p>
                        </span>
                    </div>
                </div>
                <div className="each-slide">
                    <div className='banner'>
                        <img src={Img3} alt="img2" />
                        <span className='contain white'>
                            <h1>Giải Pháp tối ưu dinh dưỡng BOSS</h1>
                            <h1>Tiết kiệm thời gian cho SEN</h1>
                            <p>Cung cấp cho mèo .....</p>
                        </span>
                    </div>
                </div>
            </Slide>
        </div>
    );
}

export default Banner;
