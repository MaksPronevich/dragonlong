import { SvgArrowColor } from "../../SvgArrow/SvgArrow.props.ts";
import { SvgArrow } from "../../SvgArrow/SvgArrow.tsx";
import { TabsControlProps } from "./TabsControl.props.ts";

export const TabsControl = ({
	selectedIndex,
	setSelectedIndex,
	tabsTitles,
}: TabsControlProps): JSX.Element => {
	const isFirstTab = selectedIndex === 0;
	const isLastTab = selectedIndex === tabsTitles.length - 1;

	const handlePrevClick = (): void => {
		setSelectedIndex((prevIndex) => Math.max(0, prevIndex - 1));
	};

	const handleNextClick = (): void => {
		setSelectedIndex((prevIndex) => Math.min(tabsTitles.length - 1, prevIndex + 1));
	};

	return (
		<div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 justify-center gap-6 lg:hidden">
			<button
				className="flex min-w-[158px] items-center justify-center gap-3 border border-yellow py-2 font-han-zi text-yellow disabled:border-white disabled:text-white disabled:opacity-75"
				onClick={handlePrevClick}
				disabled={isFirstTab}
			>
				<SvgArrow
					color={!isFirstTab ? SvgArrowColor.Yellow : SvgArrowColor.Outline}
					className="rotate-180"
				/>
				<span>Prev</span>
			</button>
			<button
				className="flex min-w-[158px] items-center justify-center gap-3 border border-yellow py-2 font-han-zi text-yellow disabled:border-white disabled:text-white disabled:opacity-75"
				onClick={handleNextClick}
				disabled={isLastTab}
			>
				<span>Next</span>
				<SvgArrow color={!isLastTab ? SvgArrowColor.Yellow : SvgArrowColor.Outline} />
			</button>
		</div>
	);
};
