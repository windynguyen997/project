import React from 'react';
import './contact.css'
import { Col, Container, Row } from 'reactstrap';

const Contact = () => {
    return (
        <div>
            <Container>
                <div className='contacthead'>
                <h1>Thông tin về Moon Shop</h1>
                <p>Moon Shop là thương hiệu bán đồ thú cưng online trực thuộc Công ty TNHH ABC.</p>
                </div>

                <Row>
                    <Col md={4} className='contact_us'>
                        <i class="fa-solid fa-location-dot"></i>
                        <p>94C Cao Thắng, phường 4, Quận 3, thành phố Hồ Chí Minh.</p>
                    </Col>
                    <Col md={4} className='contact_us'>
                        <i class="fa-solid fa-phone"></i>
                        <p>
                            1900 866883</p>
                    </Col>
                    <Col md={4} className='contact_us'>
                        <i class="fa-solid fa-envelope"></i>
                        <p>contact@greenacademy.edu.vn</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;
