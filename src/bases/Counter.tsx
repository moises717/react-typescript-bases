import {useState} from 'react'

interface Props{
    initialValue: number
}


export const Counter = ({initialValue}: Props) => {

    const [count, setCount] = useState(initialValue)

    const handleClick = () => {
        setCount((count) => count + 1)
    }
    return (
    <>
    <h1>Count {count}</h1>
    <button onClick={handleClick}>
       Count + 1
    </button>
    </>
  )
}
