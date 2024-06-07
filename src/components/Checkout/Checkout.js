
import React, { useState, useContext } from 'react';
import { AppContext } from '../../AppContext';
import './checkout.css'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Button,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
    Table,
} from 'reactstrap';
const Checkout = () => {
    const { cart, cart2, cart3, remove, remove2, remove3, updateQty, updateQty2, updateQty3 } = useContext(AppContext)
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    return (
        <div>
            <Container>
                <div>
                    <h1 className='tt'>Thông tin đặt hàng</h1>
                </div>
                <div className='checkout'>
                    <div className='adre'>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="name">
                                            Họ và Tên
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Nguyễn Văn A"
                                            type="Text"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="name">
                                            Số điện thoại
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Số điện thoại"
                                            type="Text"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={8}>
                                    <FormGroup>
                                        <Label for="exampleAddress2">
                                            Địa chỉ nhận hàng
                                        </Label>
                                        <Input
                                            id="exampleAddress2"
                                            name="address2"
                                            placeholder="123 Trần Hưng Đạo"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="exampleCity">
                                            Tỉnh/Thành Phố
                                        </Label>
                                        <Input
                                            id="exampleCity"
                                            name="city"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="exampleState">
                                            Quận/Huyện
                                        </Label>
                                        <Input
                                            id="exampleState"
                                            name="state"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={8}>
                                    <FormGroup>
                                        <Label for="exampleCity">
                                            Yêu cầu đặc biệt
                                        </Label>
                                        <Input
                                            id="exampleCity"
                                            name="city"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Label for="payment">
                                Hình thức thanh toán
                            </Label>
                            <Row>
                                <Col md={6}>
                                    <FormGroup check>
                                        <Input name="radio1" type="radio" />
                                        <Accordion open={open} toggle={toggle}>
                                            <AccordionItem>
                                                <AccordionHeader targetId="1" className='the'>Thanh toán bằng thẻ</AccordionHeader>
                                                <AccordionBody accordionId="1">
                                                    <Row>
                                                        <Col md={9}>
                                                            <FormGroup>
                                                                <Label for="cardnumber">
                                                                    Số thẻ
                                                                </Label>
                                                                <Input
                                                                    id="cardnumber"
                                                                    name="cardnumber"
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md={6}>
                                                            <FormGroup>
                                                                <Label for="exampleCity">
                                                                    Ngày hết hạn
                                                                </Label>
                                                                <Input
                                                                    id="exampleCity"
                                                                    name="city"
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md={4}>
                                                            <FormGroup>
                                                                <Label for="exampleState">
                                                                    CVV
                                                                </Label>
                                                                <Input
                                                                    id="exampleState"
                                                                    name="state"
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md={12}>
                                                            <FormGroup>
                                                                <Label for="exampleCity">
                                                                    Tên chủ thẻ
                                                                </Label>
                                                                <Input
                                                                    id="exampleCity"
                                                                    name="city"
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                </AccordionBody>
                                            </AccordionItem>
                                        </Accordion>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <FormGroup check>
                                <Input name="radio1" type="radio" />

                                <AccordionHeader className='shipcode'>Thanh toán khi nhận hàng</AccordionHeader>
                            </FormGroup>
                            <div className='btncheckout'>
                                <button>
                                    Đặt hàng
                                </button>
                            </div>

                        </Form>
                    </div>
                    <div className='cartinf'>
                        <div className='cartinf1'>
                            <Table
                            >
                                <tbody className='bodycart1'>
                                    {
                                        cart2.map((item, index) => (
                                            (
                                                <tr>
                                                    <th scope="row">
                                                        <img className='imgcart' src={item.img}></img>
                                                    </th>
                                                    <td>
                                                        {item.name}
                                                    </td>
                                                    <td className='price'>
                                                        {item.price}
                                                    </td>
                                                    <td className='quan'>
                                                        {/* <button className='-' onClick={() => updateQty2(item.id, -1)}>-</button> */}
                                                        SL: {item.qty}
                                                        {/* <button className='+' onClick={() => updateQty2(item.id, 1)}>+</button> */}
                                                    </td>
                                                    <td>
                                                        <span onClick={() => remove2(item.id)}><i class="fa-solid fa-trash bin"></i></span>
                                                    </td>
                                                </tr>
                                            )
                                        ))

                                    }
                                    {
                                        cart.map((item, index) => (
                                            (
                                                <tr>
                                                    <th scope="row">
                                                        <img className='imgcart' src={item.img}></img>
                                                    </th>
                                                    <td>
                                                        {item.name}
                                                    </td>
                                                    <td className='price'>
                                                        {item.price}
                                                    </td>
                                                    <td className='quan'>
                                                        {/* <button  onClick={() => updateQty(item.id, -1)}>-</button> */}
                                                        SL: {item.qty}
                                                        {/* <button onClick={() => updateQty(item.id, 1)}>+</button> */}
                                                    </td>
                                                    <td>
                                                        <span onClick={() => remove(item.id)}><i class="fa-solid fa-trash bin"></i></span>
                                                    </td>
                                                </tr>
                                            )
                                        ))

                                    }
                                    {
                                        cart3.map((item, index) => (
                                            (
                                                <tr>
                                                    <th scope="row">
                                                        <img className='imgcart' src={item.img}></img>
                                                    </th>
                                                    <td>
                                                        {item.name}
                                                    </td>
                                                    <td className='price'>
                                                        {item.price}
                                                    </td>
                                                    <td className='quan'>
                                                        {/* <button className='-' onClick={() => updateQty3(item.id, -1)}>-</button> */}
                                                        SL: {item.qty}
                                                        {/* <button className='+' onClick={() => updateQty3(item.id, 1)}>+</button> */}
                                                    </td>
                                                    <td>
                                                        <span onClick={() => remove3(item.id)}><i class="fa-solid fa-trash bin"></i></span>
                                                    </td>
                                                </tr>
                                            )
                                        ))

                                    }
                                </tbody>
                            </Table>
                            <p>Phí ship: 15000 VNĐ</p>
                        <div className='tong'>
                            <h3 >Tổng: {cart2.reduce((tong, item) => item.qty * item.price + tong, 0) + cart.reduce((tong, item) => item.qty * item.price + tong, 0) + cart3.reduce((tong, item) => item.qty * item.price + tong, 0) + 15000} VNĐ</h3>
                        </div>
                        </div>
                        <div className='btncheckout1'>
                                <button>
                                    Đặt hàng
                                </button>
                            </div>


                    </div>
                </div>
            </Container>

        </div>
    );
}

export default Checkout;
