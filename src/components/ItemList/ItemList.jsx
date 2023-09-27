import Item from '../Item/Item';
import Layout from '../Layout/Layout';
import './ItemList.css';
import { useEffect, useState } from 'react';

const ItemList = ({ items, title }) => {

    return (
        <Layout>

            <h1 id="title">{title}</h1>
            <div className="itemlist">
                {
                    items.map((item) => (
                        <Item id={item.id} name={item.name} price={item.price} stock={item.stock} urlImg={item.urlImg} />
                    ))
                }
            </div>
        </Layout>
    )
}

export default ItemList