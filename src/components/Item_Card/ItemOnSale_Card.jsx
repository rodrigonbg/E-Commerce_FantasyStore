import React from "react"
import {Link} from 'react-router-dom'
import "bootstrap"
import './Item_Card.scss'


const carrito=[]

const ItemOnSale_Card = (prod) => {/*items en liquidación */
    let buttonIcon
    let butonText
    if (carrito.some((elemento)=> elemento.id === prod.id)){/* creo la variable botón segun corresponda por cada prod. (si está o no en el carrito) */
        buttonIcon = <i className="fa-solid fa-xmark"></i>
        butonText = 'Quitar'
    }else{
        buttonIcon = <i id="articles" className="fa-solid fa-cart-shopping"></i>
        butonText = 'Añadir'
    } 
    let precioConDescuento = ((100-prod.descuento)*prod.precio)/100
    return (
        <div key={prod.id} className="item col-lg-2 col-md-3 col-sm-4 col-6">{/* PRODUCTOS */} 
            <div className="item_innerBox"> {/* INTERIOR DE LA CAJA (ICONOS, IMG Y BOTON CARRITO) */}
                <div className="icons">{/* icons */} 
                    <a className="text-decoration-none "><i className="fa-solid fa-heart"></i></a>
                    <Link to={`/products/${prod.id}`} className="text-decoration-none "><i className="fa-solid fa-eye"></i></Link>
                </div>
                <div className="saleTag"> {/* ETIQUETA DE DESCUENTO */}
                    <span className="badge rounded-0"><i className="fa-solid fa-arrow-down"></i>{prod.descuento}%</span>
                </div>
                <Link to={`/products/${prod.id}`}> <img src= {prod.img} alt={prod.alt}/> </Link>{/* IMAGEN DEL PRODUCTO */}
                <div className="">{/* BOTON DEL CARRRITO */}
                    <button id={prod.id} className="btn btn-white shadow-sm rounded-pill bg-white cart-btn">
                        {buttonIcon}{butonText}
                    </button>
                </div>
            </div>
            <div className="item_info">{/* INFO DEL PRODUCTO */}
                <div className="item_name">
                    <p>${prod.nombre}</p>
                </div>
                <div className="item_price onSale">
                    <span id="precioOnSale">${precioConDescuento.toFixed(2)}</span>
                    <span id="precioOriginal">${prod.precio}</span>
                </div>
            </div>    
        </div>   
    )
}/* boton del carrito con id del producto */
export default ItemOnSale_Card


