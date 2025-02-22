import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import { useRef } from "react";

function App() {
	const input = useRef<HTMLInputElement>(null);
	return (
		<main>
			<Container as={Button} onClick={() => {}} type="button">
				Click Me
			</Container>
			<Input label="Test" id="test" ref={input} />
		</main>
	);
}

export default App;
