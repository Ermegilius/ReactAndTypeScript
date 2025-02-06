import { ReactNode } from "react";

type HintBoxProps = {
	type: "hint";
	children: ReactNode;
};

type WarningBoxProps = {
	type: "warning";
	severity: "low" | "medium" | "high";
	children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function infoBox(props: InfoBoxProps) {
	const { children, type } = props;
	if (type === "hint") {
		return (
			<aside className="infoBox infoBox-hint">
				<p>{children}</p>
			</aside>
		);
	}

	const { severity } = props;

	return (
		<aside className={`infoBox infoBox-warning infoBox-warning-${severity}`}>
			<h2>Warning</h2>
			<p>{children}</p>
		</aside>
	);

	// return (
	// 	<aside
	// 		className={`infoBox ${
	// 			props.type === "hint" ? "infoBox-hint" : `infoBox-warning infoBox-warning-${props.severity}`
	// 		}`}
	// 	>
	// 		{props.type === "warning" && <h2>Warning</h2>}
	// 		<p>{props.children}</p>
	// 	</aside>
	// );
}
