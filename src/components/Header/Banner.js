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
                        <div className='hinh'> 
                            <img className='hat' src={Img2} alt="img1" />
                            </div>
                        <Container>
                        <span className='contain' data-aos="fade-down">
                            <h1>Giải Pháp tối ưu dinh dưỡng BOSS</h1>
                            <h1>Tiết kiệm thời gian cho SEN</h1>
                            <p>Cung cấp cho mèo một chế độ dinh dưỡng toàn diện và đầy đủ. Đảm bảo hàng chính hãng.</p>
                        </span>
                        </Container>

                    </div>
                </div>
                <div className="each-slide">
                    <div className='banner'>
                        <div className='hinh'>
                        <img className='hat' src={Img3} alt="img2" />
                        </div>
                        <Container>
                        <span className='contain white'>
                            <h1>Hãy tạo môi trường sống lành mạnh cho BOSS</h1>
                            <h1>Để có thể bên cạnh BOSS của bạn lâu hơn</h1>
                            <p>Cung cấp cho mèo những sản phẩm dĩnh dưỡng bổ sung và phụ kiện chất lượng góp phần tạo nên môi trường sống hoàn hảo cho mèo. </p>
                        </span>
                        </Container>

                    </div>
                </div>
            </Slide>
        </div>
    );
}

export default Banner;
