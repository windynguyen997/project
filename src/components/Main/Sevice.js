import React from 'react';
import './main.css'
import { Container } from 'reactstrap';
const Sevice = () => {
    return (
        <div>
            <Container>
            <h1 className='h1'>Dịch vụ của Shop</h1>
            <div className='line1'></div>
            <div className='coverbox2'>
                <div className='box2'>
                    <img src="https://fiestapets-ishi.myshopify.com/cdn/shop/files/1_3e227b22-a14e-4384-8590-f4a5042d6f8c.png?v=1657534385"></img>
                </div>
                <div className='box2'>
                    <img src="https://fiestapets-ishi.myshopify.com/cdn/shop/files/2_741e0d30-253e-4a01-85c4-0433ba3eeec3.png?v=1657534385"></img>
                </div>
                <div className='box2'>
                    <img src="https://fiestapets-ishi.myshopify.com/cdn/shop/files/3_144cf1ce-4937-4e68-8a8c-e3a75668cb5b.png?v=1657534385"></img>
                </div>
            </div>
            </Container>

        </div>
    );
}

export default Sevice;
