import { Tab, Transition } from "@headlessui/react";

import { TabPanelProps } from "./TabPanel.props.ts";

export const TabPanel = ({ children }: TabPanelProps): JSX.Element => {
	return (
		<Tab.Panel className="flex h-full flex-col justify-end outline-none lg:justify-center">
			<Transition
				show={true}
				appear
				enter="ease-out duration-200"
				enterFrom="opacity-0 scale-50"
				enterTo="opacity-100 scale-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-50"
				className="flex h-[45%] flex-col justify-start md:h-[55%] lg:max-w-[55%] lg:justify-center"
			>
				{children}
			</Transition>
		</Tab.Panel>
	);
};
