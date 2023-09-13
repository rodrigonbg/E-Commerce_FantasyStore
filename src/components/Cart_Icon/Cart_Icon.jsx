import './Cart_Icon.scss'
import { useState } from 'react'

const Cart_Icon = () => {
  /* useState es un obj que guarda info que será mostrada en el componente y permite cambiar esa info mediante una funcion, setCounter en este caso */
  /* EN caso de querer iniciar el contador con la cantidad actual de prods en carrito, podemos pasar ese dato por props al componente */
  const [counter, setCounter] = useState(0) 

  /* Puedo usar la funcion setCounter pasandole por parametro el nuevo valor para modificar el state de counter */
  const inceaseCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <i id="car" className="fa-solid fa-cart-shopping"><span>{counter}</span></i>
  )
}

export default Cart_Icon