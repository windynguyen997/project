import React from 'react';
import Header from '../../components/Header/Navbar';
import Banner from '../../components/Header/Banner';
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import ProductList from '../../components/Main/ProductList';
import Bestseller from '../../components/Main/Bestseller';
import Sevice from '../../components/Main/Sevice';
import Petcare from '../../components/Main/Petcare';



const Home = () => {
    return (
        <div>
            <Banner />
            <ProductList/>
            <Bestseller/>
            <Sevice/>
            <Petcare/>

        </div>
    );
}

export default Home;
