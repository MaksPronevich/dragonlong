import { ForwardedRef, forwardRef, ReactNode } from "react";

export interface ScrollableContentProps {
	children: ReactNode;
}

export const ScrollableContent = forwardRef(
	({ children }: ScrollableContentProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
		return (
			<div ref={ref} className="scroll-container overflow-y-auto pr-2">
				{children}
			</div>
		);
	},
);
