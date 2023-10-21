import useCount from '../../hooks/useCount';
import Button from 'react-bootstrap/Button';
import './ItemCount.css';
import { CartCtx } from '../../context/CartContext';
import { useContext } from 'react';

const ItemCount = ({ stock, initial, item }) => {

    const {cart, addOnCart} = useContext(CartCtx);

    const { count, increment, decrement } = useCount(initial)

    return (
        <div>
            <div>
                <Button variant='dark' onClick={() => decrement()} className='removeBtn'>-</Button>
                <span className='quantity'>{count}</span>
                <Button variant='dark' onClick={() => increment(stock)} className='addBtn'>+</Button>
            </div>
            <Button variant='dark' className='addCart' onClick={() => addOnCart(item, count)}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount