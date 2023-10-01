import React from "react"
import { useState, useEffect } from "react"
import 'bootstrap'
import './ItemOnSaleList_Container'
import { useParams } from 'react-router-dom'

import ItemOnSale_Card from "../Item_Card/ItemOnSale_Card"
import { getProducts, getProductsByCategory } from '../../productos'





const ItemOnSaleList_Container = () => {
  const [products, setProducts] = useState([])
  const {id} = useParams() /* me levanta el id como string */

  useEffect(()=>{
    const funcion = id? getProductsByCategory : getProducts /* Si useParams levantó un id, uso la funcion getProductsByCategory, de lo contrario uso getProducts en gral */
    funcion(parseInt(id))
      .then(respuesta => setProducts(respuesta))

  }, [id])

  return ( /* Return de productos OnSale */
      <div id='onSale' className="section_container">  
        <section id="itemsDestacados" className="row">
          {products.map((prod)=>{
            if (prod.onSale){
              return (
                <ItemOnSale_Card 
                  key = {prod.id}
                  id = {prod.id}
                  nombre = {prod.nombre}
                  descripcion = {prod.descripcion}
                  categoria = {prod.categoria}
                  img = {prod.img}
                  precio = {prod.precio}
                  onSale = {prod.onSale}
                  descuento = {prod.descuento}
                  stock = {prod.stock}
                  alt = {prod.alt}
                />
              )
            }  
          })}
        </section>
      </div>
  )
}

export default ItemOnSaleList_Container