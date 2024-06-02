import React from 'react';
import Header from '../../components/Header/Navbar';
import Banner from '../../components/Header/Banner';
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import ProductList from '../../components/Main/ProductList';

const Home = () => {
    return (
        <div>
            <Banner />
            <ProductList/>
        </div>
    );
}

export default Home;
