import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { Button, Col, Container, Row } from 'reactstrap';
import { AppContext } from '../../AppContext';

const ProductDetail1 = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const getData = () => {
        const url = `https://66124e8c95fdb62f24ee62fe.mockapi.io/product2/${id}`
        axios.get(url).then(res => {
            setData(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    const { addCart } = useContext(AppContext)
    return (
        <div>
            <Container>
                <div className='line'></div>
                <h2 className='name1'>{data && data.name}</h2>
                <div className='line'></div>
                <Row className='prodetail'>
                    <Col>
                        <img src={data && data.img} width={400}></img>
                    </Col>
                    <Col className='detail'>
                        <h3>Giá: <span className='sale1'>{data && data.sale}đ</span> <span className='price'>{data && data.price}đ</span></h3>
                        <span><p className='decrip'>{data && data.decription}</p></span>
                        <Button className='buy1 buy3' onClick={(() => addCart(data && data.id))}>
                        Thêm vào giỏ hàng
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProductDetail1;
