import './Cart_Item.scss'
import React from 'react'

import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const Cart_Item = ({item, cantidad}) => {

    const {removeItem, increaseAmount, decreaseAmount} =useContext(CartContext)

    let saleTag
    let precioOriginalTachado
    let precioConDescuento = (((100-item.descuento)*item.precio)/100)

    if (item.onSale===true){/* creo el item dependiendo de si el producto está en loquidación o no */
        saleTag = <span id="saleTag"><i className="fa-solid fa-arrow-down"></i>{item.descuento}%</span>
        precioOriginalTachado = <span id="precioOriginal">${item.precio}</span>
    }else{
        saleTag=""
        precioOriginalTachado=""
    }
    return (
        <div className="prodCarrito">
            <div>
                <img className="imgCarrito" src={item.img} alt={item.alt}/>
                {saleTag}
            </div>
            <p className="nombreProdCarrito">{item.nombre}</p>
            <p className="precioProdCarrito">{precioOriginalTachado} ${precioConDescuento}</p>
            <div className="cantidadProdCarrito">
                <button id={item.id} className="btn decrementar" onClick={()=> decreaseAmount(item.id)}>-</button>
                <span>{cantidad}</span>
                <button id={item.id} className="btn incrementar" onClick={()=> increaseAmount(item.id)}>+</button>
            </div>
            <p className="subtotalProdCarrito">${precioConDescuento*cantidad.toFixed(2)}</p>
            <div><i id={item.id} className="fa-solid fa-xmark fa-2x" onClick={()=> removeItem(item.id)}></i></div>
        </div>
  )
}

export default Cart_Item
