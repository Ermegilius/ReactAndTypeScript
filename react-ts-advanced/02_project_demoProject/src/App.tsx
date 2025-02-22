import Input from "./components/Input";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
	return (
		<main>
			<Form>
				<Input type="text" label="Name" id="name"></Input>
				<Input type="text" label="Age" id="age"></Input>
				<p>
					<Button>Save</Button>
				</p>
			</Form>
		</main>
	);
}

export default App;
