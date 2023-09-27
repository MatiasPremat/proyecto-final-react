import { useState } from "react"

function useCount(initial) {

    const [count, setCount] = useState(initial)

    //aca se podria poner un if para que no agregue mas que el stock disponible
    const increment = (stock) => {
        if (stock > count) setCount(count + 1)
    }

    const decrement = () => {
        if (count >= 2) setCount(count - 1)
    }

    return { count, increment, decrement }
}

export default useCount