import { useState } from "react"

function useCount(initial) {

    const [count, setCount] = useState(initial)

    const increment = (stock) => {
        if (stock > count)
            setCount(count + 1)
    }

    const decrement = () => {
        if (count >= 2) 
            setCount(count - 1)
    }

    return { count, increment, decrement }
}

export default useCount