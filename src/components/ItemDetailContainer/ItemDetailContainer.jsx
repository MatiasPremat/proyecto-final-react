import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Layout from '../Layout/Layout';
import { db } from '../../db/db'
import { doc, getDoc } from 'firebase/firestore';
import { Ring } from '@uiball/loaders'

const ItemDetailContainer = () => {

  const id = (useParams().id).slice(1);
  const [item, setItem] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const productRef = doc(db, "products", id);

    getDoc(productRef).then((res) => {
      if(res.exists()){
        const productData = {id: res.id, ...res.data()}
        setTimeout(() => {
          setItem(productData);
          setIsLoading(false);
        }, 300)
      } else {
        console.log("El producto no existe");
      }
    })
  }, [id])


  return (
    <Layout>
      {isLoading ? <Ring size={60} lineWeight={3} speed={2} color="black"/> : <ItemDetail item={item} />}
    </Layout>
  )
}

export default ItemDetailContainer