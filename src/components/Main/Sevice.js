import React, { useContext, useState } from 'react';
import './main.css'
import { Container, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, ModalFooter, Button } from 'reactstrap';
import { AppContext } from '../../AppContext';
import { Link } from 'react-router-dom';
const Sevice = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const { call } = useContext(AppContext)
    return (
        <div>
            <Container>
                <h1 className='h1'>Dịch vụ của Shop</h1>
                <div className='line1'></div>
                <div className='coverbox2' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="300">
                    <div className='box2' onClick={call}>
                        <img src="https://fiestapets-ishi.myshopify.com/cdn/shop/files/1_3e227b22-a14e-4384-8590-f4a5042d6f8c.png?v=1657534385"></img>

                    </div>
                    <div className='box2' onClick={toggle}>
                        <img src="https://fiestapets-ishi.myshopify.com/cdn/shop/files/2_741e0d30-253e-4a01-85c4-0433ba3eeec3.png?v=1657534385"></img>
                        <Modal isOpen={modal} toggle={toggle}>
                            <ModalHeader toggle={toggle}>Đăng ký thông tin để nhận mã giảm giá!!</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup>
                                        <Label
                                            for="exampleEmail"
                                            hidden
                                        >
                                            Họ và Tên
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="Họ và tên"
                                            placeholder="Họ và tên"
                                            type="email"
                                        />
                                    </FormGroup>
                                    {' '}
                                    <FormGroup>
                                        <Label
                                            for="exampleEmail"
                                            hidden
                                        >
                                            Email
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="Email"
                                            placeholder="Email"
                                            type="email"
                                        />
                                    </FormGroup>
                                    {' '}
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button className='gui' onClick={toggle}>
                                    Gửi
                                </Button>{' '}
                                <Button color="secondary" onClick={toggle}>
                                    Huỷ
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                    <Link to="/product">
                    <div className='box2'>
                        <img src="https://fiestapets-ishi.myshopify.com/cdn/shop/files/3_144cf1ce-4937-4e68-8a8c-e3a75668cb5b.png?v=1657534385"></img>
                    </div>
                    </Link>
                </div>
                <div className='textbox2'>
                    <div className='text2'>
                        <h5>Hỗ trợ 24/7</h5>
                    </div>
                    <div className='text2'>
                        <h5>Nhận mã giảm giá</h5>
                    </div>
                    <div className='text2'>
                        <h5>Mua hàng trực tuyến</h5>
                    </div>
                </div>
            </Container>

        </div>
    );
}

export default Sevice;
