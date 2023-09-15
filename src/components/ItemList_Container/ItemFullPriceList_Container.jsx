import React from 'react'
import { useState, useEffect } from 'react'
import 'bootstrap'
import './ItemList_Container.scss'
import { useParams } from 'react-router-dom'

import ItemFullPrice_Card from "../Item_Card/ItemFullPrice_Card"
import { getProducts, getProductsByCategory } from '../../productos'

const ItemFullPriceList_Container = () => {

  const [products, setProducts] = useState([])
  const {id} = useParams(); /* me levanta el id como string */

  useEffect(()=>{
    const funcion = id? getProductsByCategory : getProducts /* Si useParams levantó un id, uso la funcion getProductsByCategory, de lo contrario uso getProducts en gral */
    funcion(parseInt(id))
      .then(respuesta => setProducts(respuesta))
  }, [id])

  return ( /* Return de productos FullPrice */
  <div className="section_container">
    <section id="itemsOnSale" className="row">
      {products.map((prod)=>{
        if (!prod.onSale){
          return (
            <ItemFullPrice_Card
              key = {prod.id}
              descuento = {prod.descuento}
              img = {prod.img}
              alt = {prod.alt}
              id = {prod.id}
              nombre = {prod.nombre}
              precio = {prod.precio}
            />
          )
        }  
      }) 
    }
    </section>
  </div>
)
}

export default ItemFullPriceList_Container