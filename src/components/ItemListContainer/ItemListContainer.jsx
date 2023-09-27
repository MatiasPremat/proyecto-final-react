import { useEffect, useState } from 'react';
import products from '../../products.json';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    const [title, setTitle] = useState();

    //saves the category that the user has selected
    const category = useParams().category

    //gets all the products from de products.json file
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            resolve(products)
        })
    };

    //gets the items and category title every time category changes
    useEffect(() => {
        getTitle();
        getProducts()
            .then((res) => {
                if (category) {
                    setItems(res.filter((item) => item.category === category))
                } else {
                    setItems(res)
                    setTitle("Todos Nuestros Productos")
                }
            })
    }, [category])

//gets the category title name to show according to the one selected by the user
    const getTitle = () => {
        switch (category) {
            case 'imperial':
                setTitle('Imperiales');
                break;
            case 'torpedo':
                setTitle('Torpedos');
                break;
            case 'camionero':
                setTitle('Camioneros');
                break;
            case 'bombilla':
                setTitle('Bombillas');
                break;
            case 'undefined':
                setTitle('Todo');
                break;
        }
    }

    return (
        <div>
            {items && <ItemList items={items} title={title} />}
        </div>
    )
}

export default ItemListContainer