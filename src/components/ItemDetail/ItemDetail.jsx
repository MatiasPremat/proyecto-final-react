import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({ id, name, description, color, price, stock, urlImg }) => {
    return (
        <div className="container" key={id}>
            <img src={urlImg} className="imgdetail" />
            <div className="itemdata">
                <h1 id="name">{name}</h1>
                <h2 id="description-title">Descripción:</h2>
                <p>{description}</p>
                <p>Color: {color}</p>
                <p>${price}</p>
                <div className='count'>
                    <ItemCount stock={stock} initial={1} />
                </div>
            </div>
        </div>

    )
}

export default ItemDetail