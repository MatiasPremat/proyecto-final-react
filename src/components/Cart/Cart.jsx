import {addDoc, getFirestore, collection} from 'firebase/firestore';
import Layout from '../Layout/Layout';
import { useContext, useEffect } from 'react';
import { CartCtx } from '../../context/CartContext';
import './cart.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';

const Cart = () => {

  const {cart, emptyCart, totalPrice} = useContext(CartCtx);


  return (
    <Layout>
      {
        cart.length 
        ? 
        (
          <div id='cart'>
            <div id='cart-products'>
            {cart.map((product) => (
              <div key={product.id} className='cart-product'>
                <img src={product.urlImg} className='img-product'/>
                <div className='product-data'>
                  <h3 className='name'>{product.name}</h3>
                  <p>${product.price * product.quantity}</p>
                  <p>Cantidad: {product.quantity}</p>
                </div>
              </div>
            ))}
            </div>
            <div id='cart-total'>
              <h2>Total Carrito:</h2>
              <p>${totalPrice()}</p>
              <Button className='cart-btn' onClick={emptyCart}>Vaciar Carrito</Button>
            </div>
            <Checkout/>
          </div>
        )
        :
        (
          <h1>No hay Productos</h1>
        )
      }
    </Layout>
  )
}

export default Cart