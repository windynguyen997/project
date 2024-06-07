import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { AppContext } from '../../AppContext';
import './product.css'
import tpcn from '../../images/MeoTPCN2.jpg'
import {Form, Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
const Product2 = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const url = 'https://66124e8c95fdb62f24ee62fe.mockapi.io/product2'
    const [data, setData] = useState(null)
    const getData = () => {
        axios.get(url).then(res => {
            setData(res.data)
        }).catch((error) => {
            console.log(error)
        })

    }
    
    useEffect(() => {
        getData()
    }, [])
    
    const { addCart2 } = useContext(AppContext)
    return (
        <div>
            <div className='bannerimg'>
            <img className='banner3' src={tpcn} alt='meptpcn' />
            </div>

            <div className='header_product'>
                <h3 className='contain2'>Thực Phẩm Chức Năng Của Moon Shop</h3>
                <p className='contain1'>Hãy bảo vệ Boss của bạn một cách toàn diện, bằng cách ngoài thức ăn chính hãy cho Boss của bạn dùng thêm thực phẩm chức năng nhé!!!</p>
                <Button className='TV' onClick={toggle}>Cần tư vấn</Button>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Điền thông tin liên lạc</ModalHeader>
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
                                    for="phone"
                                    hidden
                                >
                                    Số điện thoại
                                </Label>
                                <Input
                                    id="phone"
                                    name="Số điện thoại"
                                    placeholder="Số điện thoại"
                                    type="text"
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
            <Container>
                <Row>
                    {
                        data && data.map((item, index) => (
                            <Col>
                                <Card className='card'>
                                    <Link className='name cardtext' to={`/product2/${item.id}`} key={index}>
 
                                    <img className='img'
                                            src={item.img}
                                        />


                                        <CardBody className='cardtext'>
                                            <CardTitle tag="h4">
                                                <div>{item.name}</div>
                                            </CardTitle>
                                            <CardText>
                                                <span className='sale'>{item.sale}đ</span><span> - </span><span className='price'> {item.price}<span>đ</span></span>
                                            </CardText>
                                        </CardBody>
                                    </Link>
                                    <div className='buy2'>
                                        <Button className='buy3' onClick={() => addCart2(item.id)}>
                                        Thêm vào giỏ hàng
                                        </Button>
                                        <Link className='name cardtext' to={`/product2/${item.id}`} key={index}>
                                            <Button className='buy1'>Chi tiết</Button>
                                        </Link>
                                    </div>

                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>

        </div>
    );
}

export default Product2;
