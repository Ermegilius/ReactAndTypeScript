import Container from "./UI/Container.tsx";
import { type Timer as TimerProps } from "../store/timers-context.tsx";
import { useEffect, useRef, useState } from "react";

export default function Timer({ name, duration }: TimerProps) {
	const interval = useRef<number | null>(null);
	const [remainingTime, setRemainingTime] = useState(duration * 1000); //user sets s; logic uses ms
	if (remainingTime <= 0 && interval.current) {
		clearInterval(interval.current);
	}
	useEffect(() => {
		const timer = setInterval(function () {
			setRemainingTime((prevTime) => prevTime - 10);
		}, 10);
		interval.current = timer;
		return () => {
			clearInterval(timer);
		};
	}, []);

	const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

	return (
		<Container as="article">
			<h2>{name}</h2>
			<p>
				<progress max={duration * 1000} value={remainingTime} />
			</p>
			<p>{formattedRemainingTime}</p>
		</Container>
	);
}
