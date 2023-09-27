import { useEffect, useState } from 'react';
import products from '../../products.json';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Layout from '../Layout/Layout';

const ItemDetailContainer = () => {

  const id = (useParams().id).slice(1);
  const [item, setItem] = useState();

  const getItemById = (id) => {
    return new Promise((resolve, reject) => {
      const producto = products.find((product) => product.id === Number(id));

      if (producto) {
        resolve(producto)
      } else {
        reject({ error: "No se encontró el producto" });
      }
    });
  }

  useEffect(() => {
    getItemById(id)
      .then((res) => setItem(res))
      .catch((err) => console.log(err))
  }, [id])


  return (
    <Layout>
      {item && <ItemDetail id={item.id} name={item.name} description={item.description} color={item.color} price={item.price} stock={item.stock} urlImg={item.urlImg} />}
    </Layout>
  )
}

export default ItemDetailContainer