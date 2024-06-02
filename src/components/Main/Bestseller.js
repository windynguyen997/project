import React from 'react';
import './main.css'
import {Button, Container } from 'reactstrap';
import pate from '../../images/pate.png'
import pubding from '../../images/pubding.png'
import { Link } from 'react-router-dom';
const Bestseller = () => {
    return (
        <Container>
        <div className='seller'>
            <h1 className='h1'>Sản Phẩm Bán Chạy Của Shop</h1>
            <div className='line1'></div>
            <div className='coverbox1'>
                <div className='box1'>
                    <img src="https://fiestapets-ishi.myshopify.com/cdn/shop/files/banner_1.png?v=1657519526"></img>
                    <div className='contain3'>
                    <h5 className='week'>Sản phẩm bán chạy trong tuần</h5>
                    <Link to="/product2/3">
                    <img src={pubding}></img><br></br>
                    <Button className='btn1'>Xem ngay</Button>
                    </Link>
                    
                    </div>
                </div>
                <div className='box1'>
                <img src="https://fiestapets-ishi.myshopify.com/cdn/shop/files/banner_2.png?v=1657519526"></img>
                <div className='contain3'>
                <h5 className='week'>Sản phẩm bán chạy trong tuần</h5>

                    <Link to="/product/2">
                    <img src={pate}></img><br></br>
                    <Button className='btn2'>Xem ngay</Button>
                    </Link>

                    </div>
                </div>
            </div>

        </div>
        </Container>

    );
}

export default Bestseller;
