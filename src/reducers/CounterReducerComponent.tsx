import { useReducer, } from 'react'
import { doReset, doIncreaseBy } from './actions/actions';
import { counterReducer } from './counterReducer';
import { CounterState } from './interfaces/interfaces';
interface Props {
    initialValue: number
}
const INITIAL_STATE: CounterState = {
    counter: 10,
    previous: 0,
    changes: 0,
}

export const CounterReducerComponent = ({ initialValue }: Props) => {

    const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);


    const increaseBy = () => {
        dispatch(doIncreaseBy(1));
    }
    const handleReset = () => {
        dispatch(doReset())
    }
    return (
        <>
            <h1>Count reducer {JSON.stringify(state)}</h1>
            <button onClick={increaseBy}>
                Count + 1
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </>
    )
}
