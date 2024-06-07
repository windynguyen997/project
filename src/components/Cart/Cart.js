import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { Button, Container, Table } from 'reactstrap';
import './cart.css'
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart,cart2,cart3, remove,remove2,remove3, updateQty,updateQty2,updateQty3 } = useContext(AppContext)
    return (
        <div>
            <Container>
                <h2 className='headercart'>Giỏ hàng của bạn</h2>
            <Table
            >
                <thead className='headertable'>
                    <tr >
                        <th>
                            Sản phẩm
                        </th>
                        <th>
                            Tên sản phẩm
                        </th>
                        <th>
                            Đơn giá
                        </th>
                        <th>
                            Số lượng
                        </th>
                        <th>
                            
                        </th>
                    </tr>
                </thead>
                <tbody className='bodycart'>
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
                                        <button className='-' onClick={() => updateQty2(item.id, -1)}>-</button>
                                        {item.qty}
                                        <button className='+' onClick={() => updateQty2(item.id, 1)}>+</button>
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
                                        <button className='-' onClick={() => updateQty(item.id, -1)}>-</button>
                                        {item.qty}
                                        <button className='+' onClick={() => updateQty(item.id, 1)}>+</button>
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
                                        <button className='-' onClick={() => updateQty3(item.id, -1)}>-</button>
                                        {item.qty}
                                        <button className='+' onClick={() => updateQty3(item.id, 1)}>+</button>
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
            <div className='tong'>
            <h3 >Tổng: {cart2.reduce((tong, item) => item.qty * item.price + tong, 0)+cart.reduce((tong, item) => item.qty * item.price + tong, 0)+cart3.reduce((tong, item) => item.qty * item.price + tong, 0)} VNĐ</h3>
            </div>
            <div className='mua'>
                <Link to="/checkout"><button>Mua ngay</button></Link>
                
            </div>
            </Container>
           
        </div>
    );
}

export default Cart;
