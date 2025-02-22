import Input from "./components/Input";
import Button from "./components/Button";
import Form, { type FormHandle } from "./components/Form";
import { useRef } from "react";

function App() {
	const customForm = useRef<FormHandle>(null);

	function handleSave(data: unknown) {
		//one more way to do the same
		//"Type Casting" (also called "Type Assertion":
		//const extractedData = data as { name: string; age: string };
		//console.log(extractedData);

		//"Type Guards" for "Type Narrowing":
		if (!data || typeof data !== "object" || !("name" in data) || !("age" in data)) {
			return;
		}
		console.log(data);

		customForm.current?.clear();
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
