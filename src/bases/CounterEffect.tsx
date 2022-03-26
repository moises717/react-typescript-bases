import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Props {
    initialValue: number;
}

const MAXIMUN_COUNT = 10;
export const CounterEffect = ({ initialValue }: Props) => {
    const [count, setCount] = useState(initialValue);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        setCount((count) => Math.min(count + 1, MAXIMUN_COUNT));
    };

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(counterElement.current, { y: -10, duration: 0.2, ease: "ease.out" }).to(counterElement.current, {
            y: 0,
            duration: 0.2,
            ease: "ease.out",
        });
    }, [count]);

    return (
        <>
            <h1>Counter effect </h1>
            <h2 ref={counterElement}>{count}</h2>
            <button onClick={handleClick}>Count + 1</button>
        </>
    );
};
