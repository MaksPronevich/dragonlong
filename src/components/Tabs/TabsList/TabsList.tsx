import { Tab } from "@headlessui/react";
import { Fragment } from "react";

import { SvgArrowColor } from "../../SvgArrow/SvgArrow.props.ts";
import { SvgArrow } from "../../SvgArrow/SvgArrow.tsx";
import { TabsListProps } from "./TabsList.props.ts";

export const TabsList = ({ tabsTitles }: TabsListProps): JSX.Element => {
	return (
		<Tab.List className="absolute top-1/2 z-[30] hidden -translate-y-1/2 flex-col items-stretch gap-6 lg:flex">
			{tabsTitles.map((title) => (
				<Tab key={title} as={Fragment}>
					{({ selected }) => (
						<button
							className={`flex items-center gap-3 font-han-zi outline-none transition hover:text-yellow  ${
								selected && "cursor-not-allowed text-yellow"
							}`}
						>
							{selected && <SvgArrow color={SvgArrowColor.Yellow} />}
							<span>{title}</span>
						</button>
					)}
				</Tab>
			))}
		</Tab.List>
	);
};
