import './Product_Detail.scss'
import 'bootstrap'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'

const Product_Detail = ({id, nombre, descripcion, categoria, img, precio, onSale, descuento, stock, alt }) => {

  const [amount, setAmount] = useState(1)/* Cantidad de unidades a agregar al carrito */
  const onSalePrice = (((100-descuento)*precio)/100);

  /* Funcion para incrementar elcontador de productos a agregar en 1  */
  const increaseAmount = () =>{
    if (amount < stock){
      setAmount(amount + 1)
    }
  }
  /* Funcion para decrementar elcontador de productos a agregar en 1  */
  const decreaseAmount = () =>{
    if (amount > 1){
      setAmount(amount - 1)
    }
  }

  return (
      <div key={id} className = 'product_Detail'>
        <Link to="/" className="goBackLink">{/*  */}
          {' <-- Go Back'}
        </Link>
        <section className="">

          <picture className="">
            {}
            <div className="saleTag" > {/* ETIQUETA DE DESCUENTO */}
              {onSale? <span className="badge rounded-0"><i className="fa-solid fa-arrow-down"></i>{descuento}%</span>: <></> }
            </div>
            <img src={img} alt={alt}/>
          </picture>

          <article className="">
                  
            <div className="infoSection">
              <h2 className="productName">{nombre}</h2>
              <p className='productDescription'>{descripcion}</p>
              <p className='productCategory'>{categoria}</p> 
              <div>
                <p>Precio por unidad: </p>
                <strong>${onSale? <>{onSalePrice} <span className='oldPrice'>{precio}</span>  </>: precio }</strong>
              </div>
              <div>
                <p>Precio en total: </p>
                <strong>${onSale? (onSalePrice * amount).toFixed(2) : precio * amount }</strong>
              </div>    
            </div>

            <div className='buttonSection'>
              <div className='handelAmountSection'>
                <button onClick={decreaseAmount}>-</button>
                <strong>{amount}</strong>
                <button onClick={increaseAmount}>+</button>
              </div>
              <p>Stock disponible: {stock}</p>
              <button className='cartButton' >Add to cart</button>
            </div>

          </article>

        </section>

      </div> 
  )
}

export default Product_Detail