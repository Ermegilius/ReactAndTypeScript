import Input from "./components/Input";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
	function handleSave(data: unknown) {
		const extractedData = data as { name: string; age: string };
		console.log(extractedData);
	}

	return (
		<main>
			<Form onSave={handleSave}>
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
