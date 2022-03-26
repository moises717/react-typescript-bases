import { useCounter } from "../hook/useCounter";


interface Props {
    initialValue: number;
}


export const CounterHook = ({ initialValue }: Props) => {

    const { count, ElementToAnimate, handleClick } = useCounter({
        MaxCount: 10
    });

    return (
        <>
            <h1>Counter hook </h1>
            <h2 ref={ElementToAnimate}>{count}</h2>
            <button onClick={handleClick}>Count + 1</button>
        </>
    );
};
