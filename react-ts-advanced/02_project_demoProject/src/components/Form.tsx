import { type ComponentPropsWithRef } from "react";

type FormProps = ComponentPropsWithRef<"form">;

export default function Form(props: FormProps) {
	return <form {...props}>{props.children}</form>;
}
