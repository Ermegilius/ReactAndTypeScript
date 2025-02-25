import { type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react";

type ContainerProps<T extends ElementType> = {
	as?: T;
	children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({ as, children, ...props }: ContainerProps<C>) {
	// polymorphic component
	const Component = as || "div";
	return (
		<Component className="container" {...props}>
			{children}
		</Component>
	);
}
