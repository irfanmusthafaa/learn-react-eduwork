//Contoh functional component dan useState

import {useState} from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const onPlus = () => {
        setCounter(counter + 1)
    }

    const onMin = () => {
        setCounter(counter - 1)
    }

    return(<header className="App-header">
        <h1>Counter: {counter}</h1>
        <div>
            <button onClick= {onPlus}>+</button>
            <button onClick= {onMin}>-</button>

        </div>
    </header>
   
    )
}

export default Counter