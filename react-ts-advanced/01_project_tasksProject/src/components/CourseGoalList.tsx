import CourseGoal from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";
import { type CourseGoal as CGoal } from "../App.tsx";
import { ReactNode } from "react";

type CourseGoalListProps = {
	goals: CGoal[];
	onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
	if (goals.length === 0) {
		return <InfoBox type="hint">You have ho course goals yet. Start adding some</InfoBox>;
	}

	let warningBox: ReactNode;

	if (goals.length >= 4 && goals.length < 7) {
		warningBox = (
			<InfoBox type="warning" severity="low">
				Now you have at least 4 goals. Take your time to complete them!
			</InfoBox>
		);
	}

	if (goals.length >= 7 && goals.length < 10) {
		warningBox = (
			<InfoBox type="warning" severity="medium">
				Now you have at least 7 goals. You are at risk of overwhelming!
			</InfoBox>
		);
	}

	if (goals.length >= 10) {
		warningBox = (
			<InfoBox type="warning" severity="high">
				Now you have at least 10 goals. You are inder an avalanche!
			</InfoBox>
		);
	}

	return (
		<>
			{warningBox}
			<ul>
				{goals.map((goal) => (
					<li key={goal.id}>
						<CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
							<p>{goal.description}</p>
						</CourseGoal>
					</li>
				))}
			</ul>
		</>
	);
}
