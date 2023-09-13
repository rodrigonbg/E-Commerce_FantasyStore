import React from 'react'
import Product_Detail from '../../components/Product_Detail/Product_Detail'
import { useEffect, useState } from 'react'
import { getProduct } from '../../productos'
import { useParams } from 'react-router-dom'


const ProductDetail_Container = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams();

  useEffect(()=>{
    getProduct(+id)
      .then(prod => setProduct(prod)) 
  }, [id])

  return (
    <Product_Detail {...product} />
  )
}

export default ProductDetail_Container