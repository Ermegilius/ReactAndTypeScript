import { ComponentPropsWithoutRef } from "react";

type inputPropsType = {
	id: string;
	label: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ id, label, ...props }: inputPropsType) {
	return (
		<p>
			<label htmlFor={id}>{label} </label>
			<input id={id} {...props} />
		</p>
	);
}
