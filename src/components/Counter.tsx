import { useState } from 'react';

type CounterProps = {
    limit?: number
}

export const Counter = ({limit}: CounterProps) => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        if(limit) {
            if(count < limit) setCount(count+1);
        } else {
            setCount(count+1);
        }
    }

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
    </div>
  )
}
