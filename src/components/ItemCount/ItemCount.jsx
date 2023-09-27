import useCount from '../../hooks/useCount';
import Button from 'react-bootstrap/Button';
import './ItemCount.css';

const ItemCount = ({ stock, initial }) => {

    const { count, increment, decrement } = useCount(initial)

    return (
        <div>
            <div>
                <Button variant='dark' onClick={() => decrement()} className='removeBtn'>-</Button>
                <span className='quantity'>{count}</span>
                <Button variant='dark' onClick={() => increment(stock)} className='addBtn'>+</Button>
            </div>
            <Button variant='dark' className='addCart'>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount