import Item from '../Item/Item';
import Layout from '../Layout/Layout';
import './ItemList.css';
import { useEffect, useState } from 'react';
import { Ring } from '@uiball/loaders'

const ItemList = ({ items, title }) => {

    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false);
        }, 300);
    }, [items])

    return (
        <Layout>
            <h1 id="title">{title}</h1>
            {
                isLoading
                ?
                <Ring size={60} lineWeight={3} speed={2} color="black"/>
                :
                <div className="itemlist">
                    {
                        items.map((item) => (
                            <Item item={item} />
                        ))
                    }
                </div>
            }
        </Layout>
    )
}

export default ItemList