import React from 'react';
import './main.css'
import { Link } from "react-router-dom";
import {Container } from 'reactstrap';

const ProductList = () => {
    return (
        <div>
            <Container>
                <h1 className='h1'>Sản Phẩm Của Shop</h1>
                <div className='line1'></div>
                <div className='space'></div>
                <div className='coverbox'>
                    <div className='box'>
                        <Link to="/product"><img src="https://fiestapets-ishi.myshopify.com/cdn/shop/files/1_edb0c012-b767-4cca-aa6f-89a2d3290574.png?v=1657263777"></img></Link>
                    
                    </div>
                    <div className='box'>
                        <Link to="/product2"> <img src="https://fiestapets-ishi.myshopify.com/cdn/shop/files/2_b5fc0fdb-e8af-4471-b5e8-c7c936a48bf5.png?v=1657263777"></img></Link>
                    </div>
                    <div className='box'>
                        <Link to="/product3"> <img src="https://fiestapets-ishi.myshopify.com/cdn/shop/files/5_20ad538f-9b85-4cb3-a521-03b8cad0074d.png?v=1657263777"></img></Link>
                    </div>
                </div>
                <div className='covertext'>
                    <div className='text'>
                        <p>Thức ăn cho Mèo</p>
                    </div>
                    <div className='text'>
                    <p>Thực phẩm chức năng</p>
                    </div>
                    <div className='text'>
                    <p>Phụ kiện cho Mèo</p>
                    </div>

                </div>
            </Container>
        </div>
    );
}

export default ProductList;
