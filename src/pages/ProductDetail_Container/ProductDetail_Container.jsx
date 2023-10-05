import React from 'react'
import Product_Detail from '../../components/Product_Detail/Product_Detail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getDoc, doc} from "firebase/firestore" 
import { db } from "../../services/config"


const ProductDetail_Container = () => {
  const [product, setProduct] = useState(null)
  const { idItem } = useParams();

  useEffect(()=>{
    const nuevoDoc = doc(db, 'productos', idItem)
    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data()
        const nuevoProducto = {id: res.id, ...data}
        setProduct(nuevoProducto)
      })
      .catch(e => <p>Error al encontrar el producto</p>)
  },[idItem])

  return (
    <Product_Detail {...product} />
  )
}

export default ProductDetail_Container