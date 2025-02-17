import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";

function App() {
	return (
		<main>
			<Container as={Button} />
			{/* <Input id="name" label="Your name here" type="text" />
			<Input id="age" label="Your age here" type="number" />
			<p>
				<Button>A button</Button>
			</p>
			<p>
				<Button href="https://google.com">A link</Button> 
			</p>*/}
		</main>
	);
}

export default App;
