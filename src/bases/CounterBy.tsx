import {useState} from 'react'

interface Props{
    initialValue: number
}

interface CounterState {
    counter: number
    clicks: number
}

export const CounterBy = ({initialValue = 2}: Props) => {

    const [{counter, clicks}, setCount] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    })

    const handleClick = (countBy: number) => {
        setCount(({counter, clicks}) => ({
            counter: counter + countBy,
            clicks: clicks + 1
        }))
    }
    return (
    <>
    <p>count {counter}</p>
    <p>clicks: {clicks}</p>
    <button onClick={() => handleClick(5)}>
      Count + 5
    </button>
    </>
  )
}
