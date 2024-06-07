import { createContext, useState, useEffect } from "react";
import Swal from 'sweetalert2'
import axios from 'axios';
export const AppContext = createContext({})
export function AppProvider({ children }) {
    const [count, setCount] = useState(1)
    const [products, setProducts] = useState(null)
    const [products2, setProducts2] = useState(null)
    const [products3, setProducts3] = useState(null)
    const [cart, setCart] = useState([])
    const [cart2, setCart2] = useState([])
    const [cart3, setCart3] = useState([])
    const getData = () => {
        const url = 'https://66124e8c95fdb62f24ee62fe.mockapi.io/product'
        axios.get(url).then(res => {
            setProducts(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    const getData2 = () => {
      const url2 = 'https://66124e8c95fdb62f24ee62fe.mockapi.io/product2'
      axios.get(url2).then(res => {
          setProducts2(res.data)
      }).catch((error) => {
          console.log(error)
      })
  }
  const getData3 = () => {
    const url3 = 'https://6649acdb4032b1331bee85d7.mockapi.io/product3'
    axios.get(url3).then(res => {
        setProducts3(res.data)
    }).catch((error) => {
        console.log(error)
    })
}
    useEffect(() => {
        getData()
        getData2()
        getData3()
        if (localStorage.getItem('cart')) {
          setCart(JSON.parse(localStorage.getItem('cart')))
        }
        if (localStorage.getItem('cart2')) {
          setCart2(JSON.parse(localStorage.getItem('cart2')))
        }
        if (localStorage.getItem('cart3')) {
          setCart3(JSON.parse(localStorage.getItem('cart3')))
        }

        
        
    }, [])
    const addCart = (id) => {
        const pro = products.find(item => item.id == id)
        const index = cart.findIndex(item => item.id == id)
        if (index >= 0) {
            const newcart = cart
            newcart[index]['qty']++
            setCart(newcart)
            localStorage.setItem('cart',JSON.stringify(newcart))
        }
        else {
            setCart([...cart, { ...pro, qty: 1 }])
            localStorage.setItem('cart',JSON.stringify([...cart, { ...pro, qty: 1 }]))
        }

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Đã thêm vào giỏ hàng!!!",
            showConfirmButton: false,
            timer: 800
        });
    }
    const addCart2 = (id) => {
      const pro2 = products2.find(item => item.id == id)
      const index = cart2.findIndex(item => item.id == id)
      if (index >= 0) {
          const newcart2 = cart2
          newcart2[index]['qty']++
          setCart2(newcart2)
          localStorage.setItem('cart2',JSON.stringify(newcart2))
      }
      else {
          setCart2([...cart2, { ...pro2, qty: 1 }])
          localStorage.setItem('cart2',JSON.stringify([...cart2, { ...pro2, qty: 1 }]))
      }

      Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Đã thêm vào giỏ hàng!!!",
          showConfirmButton: false,
          timer: 800
      });
  }
  const addCart3 = (id) => {
    const pro3 = products3.find(item => item.id == id)
    const index = cart3.findIndex(item => item.id == id)
    if (index >= 0) {
        const newcart3 = cart3
        newcart3[index]['qty']++
        setCart3(newcart3)
        localStorage.setItem('cart3',JSON.stringify(newcart3))
    }
    else {
        setCart3([...cart3, { ...pro3, qty: 1 }])
        localStorage.setItem('cart3',JSON.stringify([...cart3, { ...pro3, qty: 1 }]))
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
                localStorage.setItem("cart",JSON.stringify(cart.filter(item => item.id != id)))
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
    const remove2 = (id) => {
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
              setCart2(cart2.filter(item => item.id != id))
              localStorage.setItem("cart2",JSON.stringify(cart2.filter(item => item.id != id)))
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
  const remove3 = (id) => {
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
            setCart3(cart3.filter(item => item.id != id))
            localStorage.setItem("cart3",JSON.stringify(cart3.filter(item => item.id != id)))
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
        localStorage.setItem('cart',JSON.stringify(cart.map(item => item.id == id && !(item.qty == 1 && num == -1) ? { ...item, qty: item.qty + num } : item)))
    }
    const updateQty2 = (id, num) => {
      setCart2(cart2.map(item => item.id == id && !(item.qty == 1 && num == -1) ? { ...item, qty: item.qty + num } : item))
      localStorage.setItem('cart2',JSON.stringify(cart2.map(item => item.id == id && !(item.qty == 1 && num == -1) ? { ...item, qty: item.qty + num } : item)))
  }
  const updateQty3 = (id, num) => {
    setCart3(cart3.map(item => item.id == id && !(item.qty == 1 && num == -1) ? { ...item, qty: item.qty + num } : item))
    localStorage.setItem('cart3',JSON.stringify(cart3.map(item => item.id == id && !(item.qty == 1 && num == -1) ? { ...item, qty: item.qty + num } : item)))
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
        <AppContext.Provider value={{ count, setCount, addCart, cart,cart2,cart3, addCart2,addCart3, remove,remove2,remove3, updateQty,updateQty2, updateQty3, onSearch, call }}>
            {children}
        </AppContext.Provider>
    )
}
