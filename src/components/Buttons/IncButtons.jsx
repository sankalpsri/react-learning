import { useState } from 'react'

export default function IncButtons({ onIncrement, onDecrement }) {
    const [count, setCount] = useState(0)
    return (
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
    );
}
