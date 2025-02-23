import Container from "./UI/Container.tsx";
import { type Timer as TimerProps } from "../store/timers-context.tsx";
import { useState } from "react";

export default function Timer({ name, duration }: TimerProps) {
	const [remainingTime, setRemainingTime] = useState(duration * 1000); //user sets s; logic uses ms
	setInterval(function () {
		setRemainingTime();
	}, 50);

	return (
		<Container as="article">
			<h2>{name}</h2>
			<p>
				<progress />
			</p>
			<p>{}</p>
		</Container>
	);
}
