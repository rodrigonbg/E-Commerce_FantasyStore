import { useState, createContext } from "react";
import './CartContext.scss'
import Swal from 'sweetalert2'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const CartContext = createContext({ /* el valor por defoult del context del carrito es un objeto con esta información */
    cart: [],
    totalPrice: 0,
    totalItems: 0,
})

export const CartContextProvider = ({children}) => {
    /* usestate para almacentar el carrito de productos cargado por el cliente */
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)


    /* metodos para las funcionalidades del carrito */
    const addItem = (item, cantidad) => {
        const existingProduct = cart.find(prod => prod.item.id === item.id)
        
        if(!existingProduct){ /* Si el prod no exitste en el carrito, lo agrego con la cantidad manteniendo lo previo */
            setCart(prev => [...prev, {item, cantidad}])
        }else{ /* si el prod existe, le actualizo cantidades */
            const updatedCart = cart.map(prod => {
                if(prod.item.id === item.id){
                    return {...prod, cantidad: prod.cantidad + cantidad}
                }else{
                    return prod;
                }
            })
            setCart(updatedCart)
        }
        item.onSale ? setTotalPrice(prev => prev + (((100-item.descuento)*item.precio)/100) * cantidad) : setTotalPrice(prev => prev + (item.precio * cantidad))
        setTotalItems(prev => prev + cantidad)
        Toastify({
            text: `producto "${item.nombre}" agregado al carrito (cantidad: ${cantidad})`,
            duration: 3500,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            className: "mensajeToastify agregado"
          }).showToast();
    }

    const removeItem = (id) => {
        const removedItem = cart.find(prod => prod.item.id === id)
        const updatedCart = cart.filter(prod => prod.item.id !== id)

        setCart(updatedCart)
        removedItem.item.onSale ? setTotalPrice(prev => prev - (((100-removedItem.item.descuento)*removedItem.item.precio)/100) * removedItem.cantidad) : setTotalPrice(prev => prev - removedItem.item.precio * removedItem.cantidad)
        setTotalItems (prev => prev - removedItem.cantidad)

        Toastify({
            text: `producto "${removedItem.item.nombre}"quitado del carrito`,
            duration: 3500,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            className: "mensajeToastify quitado"
          }).showToast();
    }

    const clearCart = () => {
        Swal.fire({
            icon: 'question',
            title: '¿Seguro que desea vaciar el carrito?',
            showDenyButton: true,    
            confirmButtonText: 'Vaciar',
            denyButtonText: 'Cancelar',
            customClass: {
                confirmButton:"btnConfirm",
                denyButton: "btnDeny",
                icon: "iconQuestion",
                title: "titleText",  
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Carrito vaciado!',    
                    showConfirmButton:false,
                    timer: 2000,
                    customClass: {
                        title: "titleText",  
                    }
                })
                setCart([])
                setTotalPrice(0)
                setTotalItems(0)
                window.scroll({top: 0})
                Toastify({
                    text: `El carrito se ha vaciado`,
                    duration: 3500,
                    close: true,
                    gravity: "bottom", // `top` or `bottom`
                    position: "left", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    className: "mensajeToastify quitado"
                  }).showToast();
            }else if (result.isDenied) {
                Swal.fire({
                    icon:'success',
                    title: 'Genial',
                    showConfirmButton: false,
                    timer: 1000,
                    customClass: {
                        title: "titleText",  
                    }
                })
            }
        })
    }

    const increaseAmount = (id) => {
        const item = cart.find(prod => prod.item.id === id)
        const index = cart.indexOf(item)
        if (cart[index].item.stock > cart[index].cantidad){
            const updatedCart = cart.map(prod => {
                if(prod.item.id === id){
                    return {...prod, cantidad: prod.cantidad + 1}
                }else{
                    return prod;
                }
            })
            setCart(updatedCart)
            setTotalItems (prev => prev + 1 )
            cart[index].item.onSale ? setTotalPrice(prev => prev + (((100-cart[index].item.descuento)*cart[index].item.precio)/100)*1 ) : setTotalPrice(prev => prev + (cart[index].item.precio * 1))
        }else{
            Toastify({
                text: `El stock del producto "${item.item.nombre}" es de ${item.item.stock}`,
                duration: 3500,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                className: "mensajeToastify aviso"
              }).showToast();
        }
    }

    const decreaseAmount = (id) => {
        const item = cart.find(prod => prod.item.id === id)
        const index = cart.indexOf(item)
        if (cart[index].cantidad > 1){
            const updatedCart = cart.map(prod => {
                if(prod.item.id === id){
                    return {...prod, cantidad: prod.cantidad - 1}
                }else{
                    return prod;
                }
            })
            setCart(updatedCart)
            setTotalItems (prev => prev - 1 )
            cart[index].item.onSale ? setTotalPrice(prev => prev - (((100-cart[index].item.descuento)*cart[index].item.precio)/100)*1 ) : setTotalPrice(prev => prev + (cart[index].item.precio * 1))
        }else{
            Toastify({
                text: `El stock no puede bajar de una unidad.`,
                duration: 3500,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                className: "mensajeToastify aviso"
              }).showToast();
        }
    }

    return(
        <CartContext.Provider value={{cart, totalPrice, totalItems, addItem, removeItem, clearCart, increaseAmount, decreaseAmount }}>
        {children}
        </CartContext.Provider>
    )
    /* En el value enviamos el valor acutal del carrito y los metodos a los componentes de mi app que lo necesiten  */
}
