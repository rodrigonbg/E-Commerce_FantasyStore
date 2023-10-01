import './Cart.scss'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Cart_Item from '../../components/Cart_Item/Cart_Item'
import EmptyCart_Card from '../../components/EmptyCart_Card/EmptyCart_Card'


const Cart = () => {

  const {cart, clearCart, totalPrice, totalItems} = useContext(CartContext)

  return (
    <section className="cart_Container">

      <SectionTitle text={'carrito de compras'} />

      <div className="tablaCarrito">
          <section className="cabezaLista">
                  <p><strong>Articulo</strong></p>
                  <p><strong>Descripción</strong></p>
                  <p><strong>Importe</strong></p>
                  <p><strong>Cantidad</strong></p>
                  <p><strong>Subtotal</strong></p>
                  <p><strong>Quitar</strong></p>
          </section>

          <section className="cuerpoLista">{/* Recorro el carrito y genero los items agregados */}
            {
            cart.map(prod => <Cart_Item key={prod.item.id} {...prod}/> )
            } 
          </section>

          {
          cart.length > 0 ? 
          <>
          <section className="pieLista">{/* si hay prods en el carrito */}
            <button className="btnVaciarCarrito" onClick={clearCart}>Vaciar Carrito</button> 
            <p className="importeTotal"> con un total de {totalItems} productos, el importe total a abonar es de: <strong> ${totalPrice.toFixed(2)} </strong> </p>
          </section> 
          <div className="botonesCarrito">
            <Link to={'/'} className="Link">Seguir comprando</Link>
            <Link className="Link">Realizar compra</Link>
          </div>
          </>
          : 
          <section className="pieLista">{/* si no hay prods en carrito */}
            <EmptyCart_Card />
          </section>
          }

      </div>



  </section>
  )
}

export default Cart