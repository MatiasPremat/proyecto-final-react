import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../db/db';
import { collection, getDocs, where, query } from 'firebase/firestore';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [title, setTitle] = useState();

    //saves the category that the user has selected
    const category = useParams().category

    useEffect(() => {
        const productsRef = collection(db, "products");
        const categoryQuery = category && query(productsRef, where("category", "==", category));

        const queryRef = category ? categoryQuery : productsRef;

        category ? setTitle(category) : setTitle("Todos Nuestros Productos");

        getDocs(queryRef).then((res) =>{
            const productsData = res.docs.map((productDoc) => (
                {
                    id: productDoc.id,
                    ...productDoc.data()
                }
            ))
            setItems(productsData);
        })
    }, [category])

    return (
        <div>
            {items && <ItemList items={items} title={title} />}
        </div>
    )
}

export default ItemListContainer