import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { AppContext } from '../../AppContext';
import './product.css'
import { Form, Button, Card, CardBody, CardText, CardTitle, Col, Container, Row, Modal, ModalHeader, ModalBody, ModalFoote, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import food from '../../images/catfood8.jpg'
import { useForm } from 'react-hook-form';
const Product = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const { register, handleSubmit } = useForm();
    const url = 'https://66124e8c95fdb62f24ee62fe.mockapi.io/product'
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
    const { addCart, onSearch } = useContext(AppContext)
    return (
        <div>
            <div className='header_img'>
                <img className='banner2' src={food} alt='catfood' />
            </div>
            <div className='header_product' data-aos="fade-right">
                <h3>Thực Phẩm Cho Mèo của Moon Shop</h3>
                <p>Hãy kết hợp cả thức ăn khô và thức ăn ướt để duy trì sức khoẻ tốt cho Boss của bạn!!!</p>
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
                            <FormGroup>
                                <Label
                                    for="Comment"
                                    hidden
                                >
                                    Vấn đề cần hỗ trợ
                                </Label>
                                <Input className='noidung'
                                    id="comment"
                                    name="comment"
                                    placeholder="Nội dung cần hỗ trợ"
                                    type="textarea"
                                />
                            </FormGroup>
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
                        <Form className='name3' onSubmit={handleSubmit(onSearch)}>
                            <FormGroup>
                                <Label
                                    for="text"
                                    hidden
                                >
                                    Tên sản phẩm
                                </Label>
                                <Input {...register("name")}
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
                            <Col md={3}>
                                <Card className='card'>
                                    <Link className='name cardtext' to={`/product/${item.id}`} key={index}>

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
                                                <Button className='buy3' onClick={() => addCart(item.id)}>
                                                    Thêm vào giỏ hàng
                                                </Button>
                                                <Link className='name cardtext' to={`/product/${item.id}`} key={index}>
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

export default Product;
