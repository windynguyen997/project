import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import {  Link } from "react-router-dom";
import { AppContext } from '../../AppContext';
import './product.css'
import toy from '../../images/toy.jpg'
import {Form, Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Modal, ModalBody, ModalHeader, Row, FormGroup, Label, Input, ModalFooter } from 'reactstrap';
const Product3 = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const url = 'https://6649acdb4032b1331bee85d7.mockapi.io/product3'
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
    const { addCart3 } = useContext(AppContext)
    return (
        <div>
            <div className='bannerimg'>
            <img className='banner3' src={toy} alt='toy of cat' />
            </div>
            
            <div className='header_product' data-aos="fade-right">
                <h3 className='contain4'>Phụ kiện Của Moon Shop</h3>
                <p className='contain5'>Hãy tạo cho Boss sự phát triển lành mạnh và hạnh phúc nhất, bằng cách xây dựng một môi trường tiện nghi và đáng yêu bằng những món phụ kiện nhỏ nhé!!!</p>
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
            <div className='find'>
                    <div>
                        <Form className='name3'>
                            <FormGroup>
                                <Label
                                    for="text"
                                    hidden
                                >
                                    Tên sản phẩm
                                </Label>
                                <Input
                                    className='name2'
                                    // name="name"
                                    placeholder="Têm sản phẩm"
                                    type="text"
                                />
                            </FormGroup>
                        </Form>
                    </div>
                    <div>
                        <button className='tim' type='submit'>
                            tìm
                        </button>
                    </div>
                </div>
                <Row>
                    {
                        data && data.map((item, index) => (
                            <Col>
                                <Card className='card'>
                                    <Link className='name cardtext' to={`/product3/${item.id}`} key={index}>
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
                                        <Button className='buy3' onClick={() => addCart3(item.id)}>
                                            Thêm vào giỏ hàng
                                        </Button>
                                        <Link className='name cardtext' to={`/product3/${item.id}`} key={index}>
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

export default Product3;
