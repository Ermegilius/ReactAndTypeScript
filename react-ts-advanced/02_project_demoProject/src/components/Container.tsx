import { type ElementType } from "react";

type ContainerProps = {
	as: ElementType;
};

export default function Container({ as }: ContainerProps) {
	// polymorphic component
	const Component = as;
	return <Component />;
}
