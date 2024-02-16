import { SvgArrowColor, SvgArrowProps } from "./SvgArrow.props.ts";

export const SvgArrow = ({ color, className }: SvgArrowProps): JSX.Element => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="13"
			viewBox="0 0 16 13"
			fill="none"
			stroke={color === SvgArrowColor.Yellow ? "#FFBE3B" : "#DADAC2"}
			className={`${className}`}
		>
			<g clipPath="url(#clip0_118_2522)">
				<path d="M0 6.5H16" strokeWidth="1.5" strokeMiterlimit="10" />
				<path d="M10 12.5C10 9.19 12.69 6.5 16 6.5" strokeWidth="1.5" strokeMiterlimit="10" />
				<path d="M16 6.5C12.69 6.5 10 3.81 10 0.5" strokeWidth="1.5" strokeMiterlimit="10" />
			</g>
			<defs>
				<clipPath id="clip0_118_2522">
					<rect width="16" height="12" fill="white" transform="translate(0 0.5)" />
				</clipPath>
			</defs>
		</svg>
	);
};
