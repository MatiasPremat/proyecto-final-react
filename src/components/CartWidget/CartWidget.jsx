import {BiCart} from 'react-icons/bi';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div>
            <BiCart id='cart'/>
            <span id='cartNumber'>4</span>
        </div>
    )
}

export default CartWidget