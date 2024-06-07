import React, { useState, useContext } from 'react';
import {Link } from 'react-router-dom';
import './navbar.css'
import Img1 from "../../images/logo.jpg"
import { AppContext } from '../../AppContext';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Button,

} from 'reactstrap';

const Header = () => {
    const { cart,cart2,cart3 } = useContext(AppContext)
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className='Header'>
            <Container>
                <Navbar expand='md'>
                    <NavbarToggler onClick={toggle} />
                    <NavbarBrand>
                        <Link to="/"><img className='img1' src={Img1} /></Link>
                    </NavbarBrand>
                    <NavbarToggler className='cart'>
                        <button className='cart1'><Link className='name' to="/cart"><i class="fa-solid fa-cart-flatbed"></i><span className='numb'>{cart.length}</span></Link></button>
                    </NavbarToggler>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <NavLink>
                                    <Link className='link' to="/"><b>Trang chủ</b></Link>
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <b className='link'>Sản Phẩm</b>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem className='link'>
                                        <Link className='link1' to="/product">Thức Ăn</Link>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem className='link'>
                                        <Link className='link1' to="/product2">Thực phẩm bổ sung</Link>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem className='link'>
                                        <Link className='link1' to="/product3">Phụ kiện</Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink>
                                    <Link className='link' to="/blog"><b>Blogs</b></Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link className='link' to="/contact"><b>Liên hệ</b></Link>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>
                            <button className='cart'> <Link className='name' to="/cart"><i class="fa-solid fa-cart-flatbed"></i><span>{cart.length+cart2.length+cart3.length}</span></Link></button>
                        </NavbarText>
                    </Collapse>
                </Navbar>

            </Container>


        </div>
    );
}

export default Header;
