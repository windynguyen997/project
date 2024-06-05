import React from 'react';
import './footer.css'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Img2 from "../../images/logo1.png"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
        <div className='footer'>
            <Container className='body_footer'>
                <div className='left'>
                    <div className='above'>
                        <div className='follow'>
                            <Link to="/"><img className='img2' src={Img2} /></Link>
                            <h5 className='gray'>Chúng tôi làm việc theo tiêu chí chất lượng và tận tâm. <br/> Nếu có bất cứ góp ý nào hãy gửi cho chúng tôi nhé. <br/>Shop luôn muốn lắng những góp ý từ bạn!!!</h5>
                            <div>
                                <p>Hãy theo dõi chúng tôi</p>
                                <a><i class="fa-brands fa-facebook-f"></i></a>
                                <a><i class="fa-brands fa-instagram"></i></a>
                                <a><i class="fa-brands fa-tiktok"></i></a>
                            </div>
                        </div>
                        <div className='contact'>
                            <div className='contact1'>
                                <div><i class="fa-solid fa-location-crosshairs"></i></div>
                                <div><h5>Địa chỉ</h5><p className='gray'>94C Cao Thắng, phường 4, Quận 3, thành phố Hồ Chí Minh.</p></div>
                            </div>
                            <div className='contact1'>
                                <div><i class="fa-solid fa-phone"></i></div>
                                <div><h5>Số điện thoại</h5><p className='gray'>1900 866883</p></div>
                            </div>
                            <div className='contact1'>
                                <div><i class="fa-solid fa-envelope"></i></div>
                                <div><h5>Email</h5><p className='gray'>contact@greenacademy.edu.vn</p></div>
                            </div>
                        </div>
                    </div>
                    <div className='under'>
                    <Link className='link' to="/product"><h5 className='gray'>Thức Ăn</h5></Link>
                    <Link className='link' to="/product2"><h5 className='gray'>Thực phẩm bổ sung</h5></Link>
                    <Link className='link' to="/product3"><h5 className='gray'>Phụ kiện</h5></Link>
                    <Link className='link' to="/blog"><h5 className='gray'>Blogs</h5></Link>
                    <Link className='link' to="/contact"><h5 className='gray'>Liên hệ</h5></Link>
                    </div>
                </div>
                <div className='right'>
                    <i class="fa-regular fa-envelope"></i>
                    <h5>Hãy để lại mail cho chúng tôi</h5>
                    <div className='line1'></div>
                    <p className='gray'>Hãy để chúng tôi gửi những chương trình khuyến mãi tuyệt vời đến bạn!</p>
                    <Form>
                        <FormGroup>
                            <Label
                                for="exampleEmail"
                                hidden
                            >
                                Email
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="Email"
                                type="email"
                            />
                        </FormGroup>
                    </Form>
                    <Button className='send'>
                        Gửi
                    </Button>
                </div>
            </Container>
            
        </div>
        <div className='end'></div>
        </div>

    );
}

export default Footer;
