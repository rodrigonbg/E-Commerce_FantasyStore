import React from 'react'
import 'bootstrap'
import './ItemList_Container.scss'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, where, query } from "firebase/firestore" 
import { db } from "../../services/config"
import ItemFullPrice_Card from "../Item_Card/ItemFullPrice_Card"
import { Loading } from '../Loading/Loading'

const ItemFullPriceList_Container = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {idCat} = useParams(); /* me levanta el id como string */


  useEffect( ()=>{
    const misProductos = idCat ? query(collection(db, 'productos'),where("idCategoria", "==", +idCat)) : collection(db, 'productos')
    /* Si hay id de categorias, levanto los productos filtrando por categorias. si no hay id de categorias, levanto todos los productos */
    setLoading(true)

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProducts(nuevosProductos)
        setLoading(false)
      })
      .catch(e => {
        return (<p>Error con la Base de datos</p>)
      })
  },[idCat])

  return ( /* Return de productos FullPrice */
  <div className="section_container">
    {
      loading? 
      <Loading />
      :
      <section id="itemsOnSale" className="row">
        {products.map((prod)=>{
          if (!prod.onSale){
            return (
              <ItemFullPrice_Card
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
        }) 
      }
      </section>
    }
  </div>
)
}

export default ItemFullPriceList_Container