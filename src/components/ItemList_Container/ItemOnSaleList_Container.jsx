import React from "react"
import 'bootstrap'
import './ItemOnSaleList_Container'
import ItemOnSale_Card from "../Item_Card/ItemOnSale_Card"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { collection, getDocs, where, query } from "firebase/firestore" 
import { db } from "../../services/config"

const ItemOnSaleList_Container = () => {
  const [products, setProducts] = useState([])
  const {idCat} = useParams() /* me levanta el id como string */

  useEffect( ()=>{
    const misProductos = idCat ? query(collection(db, 'productos'),where("idCategoria", "==", +idCat)) : collection(db, 'productos')
    /* Si hay id de categorias, levanto los productos filtrando por categorias. si no hay id de categorias, levanto todos los productos */

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProducts(nuevosProductos)
      })
      .catch(e => {
        return (<p>Error con la Base de datos</p>)
      })
  },[idCat])

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