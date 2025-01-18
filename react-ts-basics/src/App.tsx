import Header from "./components/Header.tsx";
import CourseGoalsList from "./components/CourseGoalsList.tsx";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";

export type CourseGoal = {
	title: string;
	description: string;
	id: number;
};

export default function App() {
	const [goals, setGoals] = useState<CourseGoal[]>([]);
	function handleAddGoal() {
		setGoals((prevGoals) => {
			const newGoal: CourseGoal = {
				id: Math.random(),
				title: "Learn React, step 1",
				description: "Learn the first steps in React TS",
			};
			return [...prevGoals, newGoal];
		});
	}
	return (
		<main>
			<Header image={{ src: goalsImg, alt: "A list of goals" }}>
				<h1>Your course goals</h1>
			</Header>
			<button onClick={handleAddGoal}>Add Goal</button>
			<CourseGoalsList goals={goals} />
		</main>
	);
}
