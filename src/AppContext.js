import { createContext, useState, useEffect } from "react";
import Swal from 'sweetalert2'
import axios from 'axios';
export const AppContext = createContext({})
export function AppProvider({ children }) {
    const [count, setCount] = useState(1)
    const [products, setProducts] = useState(null)
    const [cart, setCart] = useState([])
    const getData = () => {
        const url = 'https://66124e8c95fdb62f24ee62fe.mockapi.io/product'
        axios.get(url).then(res => {
            setProducts(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    const addCart = (id) => {
        const pro = products.find(item => item.id == id)
        const index = cart.findIndex(item => item.id == id)
        if (index >= 0) {
            const newcart = cart
            newcart[index]['qty']++
            setCart(newcart)
        }
        else {
            setCart([...cart, { ...pro, qty: 1 }])
        }

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Đã thêm vào giỏ hàng!!!",
            showConfirmButton: false,
            timer: 800
        });
    }
    const remove = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Bạn có chắc muốn xoá khỏi giỏ hàng không?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Tôi chắc!",
            cancelButtonText: "Tôi không!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                setCart(cart.filter(item => item.id != id))
              swalWithBootstrapButtons.fire({
                title: "Đã xoá!",
                text: "Mặc hàng đã được xoá!",
                icon: "success"
              });
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Đã huỷ",
                text: "Mặc hàng vẫn được giữ!!!",
                icon: "error"
              });
            }
          });
        // setCart(cart.filter(item => item.id != id))
    }
    const updateQty = (id, num) => {
        setCart(cart.map(item => item.id == id && !(item.qty == 1 && num == -1) ? { ...item, qty: item.qty + num } : item))
    }
    const onSearch = (name) => {
        const pro1 = products.filter(item => item.name == name)
        setProducts(pro1);
    }
    const call =()=>{
        Swal.fire({
            icon: "warning",
            title: "Hãy gọi cho chúng tôi nhé! <br> 1900 866883",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
    }
    return (
        <AppContext.Provider value={{ count, setCount, addCart, cart, remove, updateQty, onSearch, call }}>
            {children}
        </AppContext.Provider>
    )
}
