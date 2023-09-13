import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ItemFullPriceList_Container from '../../components/ItemList_Container/ItemFullPriceList_Container'
import ItemOnSaleList_Container from '../../components/ItemList_Container/ItemOnSaleList_Container'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import {Categories} from '../../components/CategoryList_Conatiner/CategoryList_Container'

const Category = () => {
    const [titulo, setTitulo] = useState('')
    const { id } = useParams();

    useEffect(()=>{

        const category = Categories.find((Category) => Category.id === Number(id))
        setTitulo(category.nombre)
        
    }, [id])

    return (
        <div>
            <SectionTitle text={titulo}/>

            <h2>Items On Sale</h2>
            <ItemOnSaleList_Container />

            <h2>Items Full Price</h2>
            <ItemFullPriceList_Container/>
        </div>
    )
}

export default Category