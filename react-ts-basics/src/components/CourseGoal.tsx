import { type ReactNode, type PropsWithChildren, type FC } from "react";

//type CourseGoalProps = { title: string; children: ReactNode };

type CourseGoalProps = PropsWithChildren<{ title: string }>; // the same as above

export default function CourseGoal({ title, children }: CourseGoalProps) {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				{children}
			</div>
			<button>Delete</button>
		</article>
	);
}

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
// 	return (
// 		<article>
// 			<div>
// 				<h2>{title}</h2>
// 				{children}
// 			</div>
// 			<button>Delete</button>
// 		</article>
// 	);
// }; //same as above

// export default CourseGoal;
