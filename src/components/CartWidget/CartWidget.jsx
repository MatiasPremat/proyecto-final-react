import { BiCart } from 'react-icons/bi';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartCtx } from '../../context/CartContext';

const CartWidget = () => {

    const {cartQuantity} = useContext(CartCtx);

    return (
        <Link to='/cart'>
            <BiCart id='cart-widget' />
            <span id='cartNumber'>{cartQuantity()}</span>
        </Link>
    )
}

export default CartWidget