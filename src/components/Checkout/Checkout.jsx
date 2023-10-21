import React, { useContext, useState } from 'react'
import Layout from '../Layout/Layout'
import { CartCtx } from '../../context/CartContext';
import {useForm} from 'react-hook-form';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../db/db.js'
import './Checkout.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Checkout = () => {

    const {register, handleSubmit} = useForm();

    const { cart, totalPrice, emptyCart } = useContext(CartCtx);

    const [orderId, setOrderId] = useState("");

    const createOrder = (data) => {
        const order = {
            client: data,
            products: cart,
            amount: totalPrice()
        }
        console.log(order);

        const ordersRef = collection(db, "orders");

        addDoc(ordersRef, order)
            .then((doc) => {
                setOrderId(doc.id);
            })
    }

    if (orderId) {
        return (
            <div className="succesfull-order">
                <h1>Muchas gracias por tu compra</h1>
                <p>Tu número de seguimiento es: {orderId}</p>
                <Button id='go-back-btn' type="submit" onClick={emptyCart}><Link to='/' id='go-back-link'>Volver</Link></Button>
            </div>
        );
    }

    return (

            <form className="checkout-form" onSubmit={handleSubmit(createOrder)}>
                <h1>Realizá tu Compra:</h1>
                <input type="text" placeholder="Ingresá tu nombre" {...register("name")} />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("phone")} />
                <input type="email" placeholder="Ingresá tu email" {...register("email")} />

                <Button className="send-order-btn" type="submit">Realizar Orden</Button>

            </form>
    )
}

export default Checkout