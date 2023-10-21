import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Nosotros from "../components/Nosotros/Nosotros";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <ItemListContainer />
    },
    {
        path: '/:category',
        element: <ItemListContainer />
    },
    {
        path: '/item/:id',
        element: <ItemDetailContainer />
    },
    {
        path: '/nosotros',
        element: <Nosotros />
    },
    {
        path: '/cart',
        element: <Cart />
    },
    {
        path: '/checkout',
        element: <Checkout />
    }
])


const Navigation = () => {
    return (
        <RouterProvider router={routes} />
    )
}

export default Navigation