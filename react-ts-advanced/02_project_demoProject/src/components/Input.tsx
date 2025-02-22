import { ComponentPropsWithoutRef, forwardRef } from "react";

type inputPropsType = {
	id: string;
	label: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, inputPropsType>(function Input({ id, label, ...props }, ref) {
	return (
		<p>
			<label htmlFor={id}>{label} </label>
			<input id={id} name={id} {...props} ref={ref} />
		</p>
	);
});

export default Input;
