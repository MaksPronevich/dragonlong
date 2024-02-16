import { TitleProps } from "./Title.props";

export const Title = ({ children, className }: TitleProps): JSX.Element => {
	return (
		<h2 className={`mb-3 font-han-zi text-xl md:text-3xl lg:mb-6 lg:text-4xl ${className}`}>
			{children}
		</h2>
	);
};
