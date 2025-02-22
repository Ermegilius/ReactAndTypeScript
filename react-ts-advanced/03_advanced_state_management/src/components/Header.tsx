import Button from "./UI/Button.tsx";
import { TimersContext, useTimersContext } from "../store/timers-context.tsx";

export default function Header() {
	const timersCtx = useTimersContext();

	return (
		<header>
			<h1>ReactTimer</h1>

			<Button>{timersCtx.isRunning ? "Stop" : "Start"} timers</Button>
		</header>
	);
}
