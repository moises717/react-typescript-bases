import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

export const useCounter = ({ MaxCount = 1 }) => {
	const [count, setCount] = useState(0);
	const ElementToAnimate = useRef<HTMLHeadingElement>(null);
	const tl = useRef(gsap.timeline());

	const handleClick = () => {
		setCount((count) => Math.min(count + 1, MaxCount));
	};

	useLayoutEffect(() => {
		if (!ElementToAnimate.current) return;

		tl.current
			.to(ElementToAnimate.current, { y: -10, duration: 0.2, ease: "ease.out" })
			.to(ElementToAnimate.current, {
				y: 0,
				duration: 0.2,
				ease: "ease.out",
			})
			.pause();
	}, []);

	useEffect(() => {
		tl.current.play(0);
	}, [count]);

	return {
		count,
		handleClick,
		ElementToAnimate,
	};
};
