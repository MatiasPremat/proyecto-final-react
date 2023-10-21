import ItemCount from '../ItemCount/ItemCount'
import './Item.css'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

const Item = ({ item }) => {

    const { id, name, price, stock, urlImg } = item

    return (
        <Card style={{ width: '18rem' }} key={id} className='item'>
            <img variant="top" src={urlImg} className='itemimg' />
            <Card.Body>
                <Card.Title><h1 className='title'>{name}</h1></Card.Title>
                <Card.Text className='price'>${price}</Card.Text>
                <div className='cardBtns'>
                    <ItemCount stock={stock} initial={1} item={item}/>
                    <Button variant='dark'><Link to={`/item/:${id}`} className='ver-mas'>Ver más</Link></Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Item