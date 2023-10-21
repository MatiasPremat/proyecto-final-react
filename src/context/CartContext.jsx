import { createContext, useState } from "react"

export const CartCtx = createContext()

const CartContext = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addOnCart = (item, quantity) => {
    const addedItem = { ...item, quantity }

    const newCart = [...cart]
    const isInCart = newCart.find((product) => product.id === addedItem.id);

    isInCart ? isInCart.quantity += quantity : newCart.push(addedItem);

    setCart(newCart);
    console.log(cart)
  }

  const cartQuantity = () => {
    return cart.reduce((acc, product) => acc + product.quantity, 0);
  }

  const totalPrice = () => {
    return cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  }

  const emptyCart = () => {
    setCart([]);
  }

  return (
    <CartCtx.Provider value={{ cart, addOnCart, cartQuantity, totalPrice, emptyCart}}>
      {children}
    </CartCtx.Provider>
  )
}

export default CartContext