import { FormEvent, type ComponentPropsWithRef } from "react";

type FormProps = ComponentPropsWithRef<"form"> & {
	onSave: (value: unknown) => void;
};

export default function Form({ onSave, children, ...otherProps }: FormProps) {
	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData);
		onSave(data);
	}
	return (
		<form onSubmit={handleSubmit} {...otherProps}>
			{children}
		</form>
	);
}
